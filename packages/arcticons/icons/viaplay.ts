import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsViaplayIcon],svg[arcticons-viaplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5a21.37 21.37 0 0 0-13.75 5L32 19.12v10L10.3 40.57A21.5 21.5 0 1 0 24 2.5m-19.28 12a21.48 21.48 0 0 0 0 19l18-9.51Z"></svg:path>`,
})
export class ArcticonsViaplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
