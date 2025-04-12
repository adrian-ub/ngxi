import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePictureInPictureIcon],svg[lucide-picture-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 10h6V4M2 4l6 6m13 0V7a2 2 0 0 0-2-2h-7m-9 9v2a2 2 0 0 0 2 2h3"></svg:path><svg:rect width="10" height="7" x="12" y="14" rx="1"></svg:rect></svg:g>`
})
export class LucidePictureInPictureIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
