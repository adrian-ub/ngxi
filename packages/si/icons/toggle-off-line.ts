import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siToggleOffLineIcon],svg[si-toggle-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"></svg:path><svg:path d="M7 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g>`,
})
export class SiToggleOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
