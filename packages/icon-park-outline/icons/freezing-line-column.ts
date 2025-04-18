import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFreezingLineColumnIcon],svg[icon-park-outline-freezing-line-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M16.123 6L6 15m20.003-9L6 24M35 6L6 33m13-3L6 42m35-32L29.243 20.853M19 21v21m0-21h23"></svg:path></svg:g>`,
})
export class IconParkOutlineFreezingLineColumnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
