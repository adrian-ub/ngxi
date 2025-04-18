import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineRadioIcon],svg[ic-outline-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H8.3l8.26-3.34L15.88 1L3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2m0 2v3h-2V9h-2v2H4V8zM4 20v-7h16v7z"></svg:path><svg:circle cx="8" cy="16.48" r="2.5" fill="currentColor"></svg:circle>`,
})
export class IcOutlineRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
