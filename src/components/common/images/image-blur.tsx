import { getBlurImage } from '@/ultis/image';
import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};

export const ImageBlur = async (props: Props) => {
  const { src, width, height, alt = '', className } = props;

  const blurDataURL = await getBlurImage(src);
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL as string}
      className={className}
    />
  );
};
