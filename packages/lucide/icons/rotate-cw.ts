import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRotateCwIcon],svg[lucide-rotate-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></svg:path><svg:path d="M21 3v5h-5"></svg:path></svg:g>`
})
export class LucideRotateCwIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
