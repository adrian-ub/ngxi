import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsErpnextIcon],svg[simple-icons-erpnext-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.88 0A2.88 2.88 0 0 0 0 2.88v18.24A2.88 2.88 0 0 0 2.88 24h18.24A2.88 2.88 0 0 0 24 21.12V2.88A2.88 2.88 0 0 0 21.12 0Zm5.04 5.76h8.254v2.146H7.92Zm0 5.033h7.85v2.146h-5.233v2.954h5.703v2.146H7.92Z"></svg:path>`,
})
export class SimpleIconsErpnextIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
