import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRustdeskIcon],svg[arcticons-rustdesk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.132 3.08a21.475 21.475 0 0 0 0 41.84m9.734.001a21.475 21.475 0 0 0 0-41.842"></svg:path>`,
})
export class ArcticonsRustdeskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
