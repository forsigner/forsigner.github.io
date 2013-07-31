"  Vim 配置文件
"  Author: forsigner
"  EMAIL: forsigner@gmail.com

set linebreak
set textwidth=80
set history=400
set ruler "右下角显示光标位置的状态行
set number "显示行号
set hlsearch "高亮显示结果
set incsearch "开启实时搜索功能
set hidden "允许在有为保存的修改时切换缓冲区
set expandtab "把Tab转换成空格
set noerrorbells
set novisualbell
set t_vb=close "http://www.infoq.com/cn/interviews/agilechina2009-guquane visual bell
set foldmethod=marker
set tabstop=4 "设置tab键的宽度
set shiftwidth=4 "换行时行间交错使用4个空格
set nobackup
set nowritebackup
set noswapfile
set smarttab
set smartindent
set autoindent "自动对齐
set cindent
"set nowrap
set autoread
set cmdheight=1
set showtabline=2
"set clipboard+=unnamed
set tabpagemax=20
set laststatus=2
set ignorecase " 不区分大小写
set enc=utf-8
set fenc=utf-8
"High light Tab
set list
set showmatch
set matchtime=5
"set listchars=tab:>-,trail:-,eol:%
set listchars=tab:>-,trail:-

syntax on

let maplocalleader = ";"
let mapleader= "'"

function! CurrectDir()
    let curdir = substitute(getcwd(), "", "", "g")
    return curdir
endfunction
set statusline=\ [File]\ %F%m%r%h\ %w\ \ [PWD]\ %r%{CurrectDir()}%h\ \ %=[Line]\ %l,%c\ %=\ %P

if has("multi_byte")
    set encoding=utf-8
    set termencoding=utf-8
    set formatoptions+=mM
    set fencs=utf-8,gbk

    if v:lang =~? '^\(zh\)\|\(ja\)\|\(ko\)'
        set ambiwidth=double
    endif

    if has("win32")
        source $VIMRUNTIME/delmenu.vim
        source $VIMRUNTIME/menu.vim
        language messages zh_CN.utf-8
    endif 
else
    echoerr "Sorry, this version of (g)vim was not compiled with +multi_byte"
endif



if has("autocmd")
    filetype plugin indent on
    augroup vimrcEx
        au!
        autocmd FileType text setlocal textwidth=78
        autocmd BufReadPost *
                    \ if line("'\"") > 0 && line("'\"") <= line("$") |
                    \   exe "normal g`\"" |
                    \ endif
    augroup END

    " 自动补全符号
    function! AutoClose()
        :inoremap ( ()<ESC>i
        :inoremap " ""<ESC>i
        :inoremap ' ''<ESC>i
        :inoremap { {}<ESC>i
        :inoremap [ []<ESC>i
        :inoremap ) <c-r>=ClosePair(')')<CR>
        :inoremap } <c-r>=ClosePair('}')<CR>
        :inoremap ] <c-r>=ClosePair(']')<CR>
    endf

    function! ClosePair(char)
        if getline('.')[col('.') - 1] == a:char
            return "\<Right>"
        else
            return a:char
        endif
    endf

    "auto close for PHP and Javascript script
    au FileType php,c,python,javascript exe AutoClose()
endif



"=====================================================
" 常规设置
"=====================================================

set foldmethod=syntax " 按照拼写进行折叠
set foldlevel=100  " 启动vim时不要自动折叠代码

" 自动备份
if has("vms")
  set nobackup
else
  set backup 
  set backupdir=./.backup,~/.backup,.,/tmp
endif

"=====================================================
" 快捷键绑定
"=====================================================

map tt :tabnew<cr>
map tn :tabnext<cr>
map tp :tabprevious<cr>

"map td :tabnew .<cr>
"map td :NERDTree <cr>
"map tl :Tlist<cr>

map te :tabedit
map tc :tabclose<cr>
map bf :BufExplorer<cr>

" 分割窗口
map ws :split<cr>
map wv :vsplit<cr>

" 关闭窗口
map wc :close<cr>

" 切换分割窗口
map wn <C-w>w

" 将所选中内容复制到系统
map cy "+y

" 模仿MS Windows中的快捷键
vmap <C-c> "+y
vmap <C-x> "yd
nmap <C-v> "+p
vmap <C-v> "+p
nmap <C-a> ggvG$

" 模仿MS Windows中的保存命令: Ctrl+S

imap <C-s> <Esc>:wa<cr>i<Right>
nmap <C-s> :wa<cr>


" 退出
smap <F10> :wq!<cr>
map <F11> :q!<cr>

"快速打开.vimrc
if(has("win32") || has("win64"))
    map <silent><leader>ee :e $HOME/_vimrc<cr>
elseif has("mac") || has("macunix")
    map <silent><leader>ee :e ~/.vimrc<cr>
else
    map <silent><leader>ee :e ~/.vimrc<cr>
endif


"======================================================
"界面设置
"======================================================




" 编码设置
if has("gui_running") || has("unix")
    set encoding=utf-8 " 设置vim内部使用的字符编码
    set langmenu=zh_CN.utf-8
    lang messages zh_CN.UTF-8 " 解决consle输出乱码
else
    set encoding=chinese " 设置命令提示符下vim不乱码
    set termencoding=chinese     "终端下的编码，对gvim来说没有必要设置
endif
 
" 在图形界面和终端的配色方案、字体
if has("gui_running")
    set columns=140 lines=50    "设置gui默认界面大小
    " 去除gvim工具栏和菜单栏
    "set guioptions-=Te
    set guioptions=
    set background=dark
    "set guioptions+=m
    " 高亮光标所在行 -- Linux下会降低性能
    "set cursorline
    "colo mustang
    "colo wombat
    "colo solarized
    colo molokai
    "colo oceandeep
    if has("unix")
        "set guifont=Liberation\ Mono\ 9
        "set guifont=Droid\ Sans\ Mono\ 9
        "set guifont=Consolas\ 9
        "set guifont=Monaco\ 9
        ""set guifont=Dejavu\ Sans\ Mono\ 11
        set guifont=Monospace\ 11
        set guifontwide=KaiTi\ 11
    elseif has("win32")
        set guifont=Courier:h12:cANSI
        set guifontwide=NSimSun:h12 " guifontwide只有在encoding=utf-8时才生效
    endif
else
    if has("unix")
    set guifont=Monaco:h14

    elseif has("win32")
        set guifont=Courier_New:h9:cANSI
        au GUIEnter * simalt ~x
    endif
endif








"======================================================
"自动切换工作目录到当前编辑的文件所在目录
"======================================================
function! Change_curr_dir()
  let _dir = expand("%:p:h")
  exec 'cd '._dir
  unlet _dir
endfunction
imap <F8> :call Change_curr_dir()

"======================================================
"plugin settings 插件设置
"======================================================
" MRU 最近打开的文件
" 最高记录个数
let MRU_Max_Entries = 20
" 在当前窗口打开
let MRU_Use_Current_Window = 1
" 打开文件之后不自动关闭
let MRU_Auto_Close = 0
" 映射rf为打开最近文件列表
map rf :MRU<cr>


" 用<C-h,j,k,l>切换到上下左右的窗口中去
noremap <C-j> <C-W>j
noremap <C-k> <C-W>k
noremap <C-h> <C-W>h
noremap <C-l> <C-W>l


" 光标所在行高亮 mm(vim) ctrl+f2(gvim)

" 开启自动补全
filetype indent on
set completeopt=longest,menu



" 关闭Project插件 
"let loaded_project = 1
"nmap pr :Project<cr>
nma <silent> pr <Plug>ToggleProject
" vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8


"======================================================
" vundle
""======================================================
filetype plugin on
set nocompatible               " be iMproved
"filetype off " required!
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()


Bundle 'gmarik/vundle'

"-----------------------------------------------------
" My Bundles here:
"

" My Bundles here:
"  "
"" original repos on github
Bundle 'lilydjwg/colorizer'
Bundle 'mattn/zencoding-vim'
Bundle 'pangloss/vim-javascript'
Bundle 'vim-scripts/jsbeautify'
Bundle 'scrooloose/syntastic'
Bundle 'othree/html5.vim'
Bundle 'othree/html5-syntax.vim'
Bundle 'tpope/vim-surround'
Bundle 'Shougo/neocomplcache'
Bundle 'ervandew/supertab'
Bundle 'hallettj/jslint.vim'
Bundle 'bolasblack/csslint.vim'
" vim-scripts repos
"Bundle 'L9'
"Bundle 'FuzzyFinder'
" non github repos
"Bundle 'git://git.wincent.com/command-t.git'
" ...


"
" " Brief help
" :BundleList          - list configured bundles
" :BundleInstall(!)    - install(update) bundles
" :BundleSearch(!) foo - search(or refresh cache first) for foo
" :BundleClean(!)      - confirm(or auto-approve) removal of unused
"  bundles


"======================================================
"插件设置
""======================================================



"------------zencoding------------------
let g:user_en_settings = {
            \ 'indentation' : ' ',
            \ 'perl' : {
            \ 'aliases' : {
            \ 'req' : 'require '
            \ },
            \ 'snippets' : {
            \ 'use' : "use strict\nuse warnings\n\n",
            \ 'warn' : "warn \"|\";",
            \ }
            \ }
            \}

let g:user_zen_expandabbr_key = '<c-e>' "设置为ctrl+e展开

let g:use_zen_complete_tag = 1



"-----------vim-javascript-------------
let g:html_indent_inctags = "html,body,head,tbody"
let g:html_indent_script1 = "inc"
let g:html_indent_style1 = "inc"

"-----------JSlint-----------------
let g:JSLintHighlightErrorLine = 0

"-----------CSSlint-----------------
let g:CSSLint_FileTypeList = ['css', 'less', 'sess']

"-----------vim-markdown-----------------
let g:vim_markdown_folding_disabled=1

"-----------less语法高亮-----------------
au BufNewFile,BufRead *.less set filetype=less
