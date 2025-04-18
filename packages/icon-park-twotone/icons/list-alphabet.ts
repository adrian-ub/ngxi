import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneListAlphabetIcon],svg[icon-park-twotone-list-alphabet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTListAlphabet0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 9h22M20 19h22M20 29h22M20 39h22M6 29h6L6 39h6"></svg:path><svg:path fill="#555" d="M11 9H7l-.7 7h5.4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 19l.3-3m5.7 3l-.3-3m0 0L11 9H7l-.7 7m5.4 0H6.3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTListAlphabet0)"></svg:path>`,
})
export class IconParkTwotoneListAlphabetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
