import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBreezIcon],svg[arcticons-breez-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.507 22.766h13.206m-4.402-5.869h13.207M9.91 30.103h16.14M19.495 8.826h10.169A7.337 7.337 0 0 1 37 16.163h0a7.337 7.337 0 0 1-7.337 7.337H28.25m.001 0h4.41a7.337 7.337 0 0 1 7.337 7.337h0a7.337 7.337 0 0 1-7.336 7.337h-16.15m9.538 0V42m0-37v3.826"></svg:path>`,
})
export class ArcticonsBreezIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
