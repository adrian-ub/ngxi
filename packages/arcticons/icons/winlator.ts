import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWinlatorIcon],svg[arcticons-winlator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 5.5V35a7.5 7.5 0 0 0 7.5 7.5h29.5V13A7.5 7.5 0 0 0 35 5.5zm0 18.5h37M24 5.5v37"></svg:path>`,
})
export class ArcticonsWinlatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
