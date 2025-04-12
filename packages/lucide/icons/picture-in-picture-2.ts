import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePictureInPicture2Icon],svg[lucide-picture-in-picture-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"></svg:path><svg:rect width="10" height="7" x="12" y="13" rx="2"></svg:rect></svg:g>`
})
export class LucidePictureInPicture2Icon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
