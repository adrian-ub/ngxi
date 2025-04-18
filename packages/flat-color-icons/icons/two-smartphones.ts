import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsTwoSmartphonesIcon],svg[flat-color-icons-two-smartphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474F" d="M6 36V8c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#BBDEFB" d="M24 7H10c-.6 0-1 .4-1 1v25c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1"></svg:path><svg:path fill="#78909C" d="M14 36h6v2h-6z"></svg:path><svg:path fill="#E38939" d="M20 40V12c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#FFF3E0" d="M38 11H24c-.6 0-1 .4-1 1v25c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V12c0-.6-.4-1-1-1"></svg:path><svg:circle cx="31" cy="41" r="1.5" fill="#A6642A"></svg:circle>`,
})
export class FlatColorIconsTwoSmartphonesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
