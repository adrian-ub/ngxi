import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsKindleIcon],svg[flat-color-icons-kindle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474F" d="M8 41V7c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#eee" d="M35 6H13c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path><svg:path fill="#546E7A" d="M20 40h8v2h-8z"></svg:path><svg:path fill="#A1A1A1" d="M16 11h16v3H16zm0 7h16v2H16zm0 4h12v2H16zm0 4h16v2H16zm0 4h12v2H16z"></svg:path>`,
})
export class FlatColorIconsKindleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
