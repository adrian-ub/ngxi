import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideImageUpIcon],svg[lucide-image-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"></svg:path><svg:path d="m14 19.5l3-3l3 3M17 22v-5.5"></svg:path><svg:circle cx="9" cy="9" r="2"></svg:circle></svg:g>`
})
export class LucideImageUpIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
