import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsViggoIcon],svg[arcticons-viggo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.9 38.7c0-16.237-13.163-29.4-29.4-29.4v9.6c10.935 0 19.8 8.865 19.8 19.8zm0-29.4h9.6v29.4h-9.6z"></svg:path>`,
})
export class ArcticonsViggoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
