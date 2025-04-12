import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImagePlusIcon],svg[lucide-image-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 5h6m-3-3v6m2 3.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"></svg:path><svg:path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></svg:path><svg:circle cx="9" cy="9" r="2"></svg:circle></svg:g>`
})
export class LucideImagePlusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
