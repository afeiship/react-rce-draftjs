import MediaBlock from './media/MediaBlock';

export const INLINE_STYLES = [
  { label: '加粗', style: 'BOLD' },
  { label: '倾斜', style: 'ITALIC' },
  { label: '下划线', style: 'UNDERLINE' }
];

export const BLOCK_TYPES = [
  { label: '一级标题', style: 'header-one' },
  { label: '引用', style: 'blockquote' },
  { label: '无序列表', style: 'unordered-list-item' }
];

export const myMediaBlockRenderer = (block) => {
  if (block.getType() === 'atomic') {
    return {
      component: MediaBlock,
      editable: false
    };
  }

  return null;
};
