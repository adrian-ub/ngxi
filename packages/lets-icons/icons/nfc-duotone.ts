import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNfcDuotoneIcon],svg[lets-icons-nfc-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsNfcDuotone0"><svg:g fill="none" stroke-linecap="round" stroke-width="1.2"><svg:path stroke="#fff" d="m5 8l5 8"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="M18.722 20.5a17 17 0 0 0 0-17M14.392 18a12 12 0 0 0 0-12"></svg:path><svg:path stroke="#fff" d="M9.928 16a8 8 0 0 0 0-8m-4.856 8a8 8 0 0 1 0-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsNfcDuotone0)"></svg:path>`,
})
export class LetsIconsNfcDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
