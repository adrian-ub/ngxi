import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWindowsIcon],svg[icon-park-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="3.833"><svg:path d="M6.75 11.0625L19.6875 9.33752V21.4125H6.75V11.0625Z"></svg:path><svg:path d="M24.8623 8.84464L41.2498 6.75V21.4125H24.8623V8.84464Z"></svg:path><svg:path d="M24.8623 27.45L41.2498 27.8333V41.25L24.8623 38.5666V27.45Z"></svg:path><svg:path d="M6.75 26.5875L19.6875 26.899V37.8L6.75 35.6198V26.5875Z"></svg:path></svg:g>`,
})
export class IconParkWindowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
