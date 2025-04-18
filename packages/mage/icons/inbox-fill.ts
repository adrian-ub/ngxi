import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInboxFillIcon],svg[mage-inbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v2.25A6.76 6.76 0 0 1 15.25 22h-6.5A6.76 6.76 0 0 1 2 15.25V13h4a1 1 0 0 1 .71.29c.183.192.286.445.29.71a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3a1 1 0 0 1 1-1z"></svg:path><svg:path fill="currentColor" d="M22 8.75V11h-4a3 3 0 0 0-3 3a1 1 0 0 1-1 1h-4a1 1 0 0 1-.71-.29A1 1 0 0 1 9 14a3 3 0 0 0-3-3H2V8.75A6.76 6.76 0 0 1 8.75 2h6.5A6.76 6.76 0 0 1 22 8.75"></svg:path>`,
})
export class MageInboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
