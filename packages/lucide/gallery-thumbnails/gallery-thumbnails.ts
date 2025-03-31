import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGalleryThumbnails],svg[lucide-gallery-thumbnails]',
  host: {
    role: 'img',

    '[attr.class]': 'class()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  template: `
    <svg:rect width="18" height="14" x="3" y="3" rx="2" />
    <svg:path d="M4 21h1" />
    <svg:path d="M9 21h1" />
    <svg:path d="M14 21h1" />
    <svg:path d="M19 21h1" />
  `,
})
export class LucideGalleryThumbnails {
  readonly class = input('lucide lucide-gallery-thumbnails');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly width = input('24');
  readonly height = input('24');
  readonly viewBox = input('0 0 24 24');
  readonly fill = input('none');
  readonly stroke = input('currentColor');
  readonly strokeWidth = input('2', { alias: 'stroke-width' });
  readonly strokeLinecap = input('round', { alias: 'stroke-linecap' });
  readonly strokeLinejoin = input('round', { alias: 'stroke-linejoin' });
}
