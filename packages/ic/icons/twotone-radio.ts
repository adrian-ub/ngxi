import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneRadioIcon],svg[ic-twotone-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13H4v7h16zM8 18.98a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1L3.24 6.15C2.51 6.43 2 7.17 2 8zM4 8h16v3h-2V9h-2v2H4zm0 5h16v7H4z"></svg:path><svg:circle cx="8" cy="16.48" r="2.5" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
