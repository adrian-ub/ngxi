import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCornerLeftUpIcon],svg[lucide-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 9L9 4L4 9"></svg:path><svg:path d="M20 20h-7a4 4 0 0 1-4-4V4"></svg:path></svg:g>`
})
export class LucideCornerLeftUpIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
