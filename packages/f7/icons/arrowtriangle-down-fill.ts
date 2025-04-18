import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowtriangleDownFillIcon],svg[f7-arrowtriangle-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.645 11.71c0-1.733-1.313-2.812-3.376-2.812l-30.538-.023c-2.04 0-3.376 1.078-3.376 2.813c0 .937.422 1.71.915 2.695L24.87 44.5c.984 1.992 1.899 2.625 3.14 2.625c1.22 0 2.134-.633 3.118-2.625L45.73 14.383c.493-.961.915-1.735.915-2.672"></svg:path>`,
})
export class F7ArrowtriangleDownFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
