import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsWrenchIcon],svg[heroicons-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.151c.833-.687.995-1.875.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.275a3 3 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852"></svg:path><svg:path d="M4.867 19.125h.008v.008h-.008z"></svg:path></svg:g>`
})
export class HeroiconsWrenchIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
