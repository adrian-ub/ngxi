import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBoxLineIcon],svg[majesticons-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 8l8-5l4 2.5M4 8v8l8 5M4 8l4 2.5m4 2.5l8-5m-8 5v8m0-8l-4-2.5M20 8v8l-8 5m8-13l-4-2.5m-8 5l8-5"></svg:path>`,
})
export class MajesticonsBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
