export type Media = {
title: string;
src: string; // /images/3d/xxx.webp
thumb?: string; // /images/3d/thumbs/xxx.webp
year?: number;
tags?: string[];
caption?: string;
};


export const artworks3d: Media[] = [
{ title: 'Cryptek Relic', src: '/images/3d/cryptek.webp', year: 2025, tags: ['hard-surface','kitbash'], caption: 'Hard-surface kitbash with emissive glyphs.' },
{ title: 'Monolith Reboot', src: '/images/3d/monolith.webp', year: 2025, tags: ['environment'], caption: 'Scale study with volumetric fog.' },
];