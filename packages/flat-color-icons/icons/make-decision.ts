import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMakeDecisionIcon],svg[flat-color-icons-make-decision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FFCC80"><svg:circle cx="38" cy="26" r="4"></svg:circle><svg:circle cx="10" cy="26" r="4"></svg:circle><svg:path d="M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15z"></svg:path><svg:path d="M24 4C15.2 4 8 11.2 8 20v3.5l2.1.6V19l19.5-6.3l8.2 6.3v5.1l2.1-.6V20C40 12.5 34.6 4 24 4"></svg:path></svg:g><svg:path fill="#FF5722" d="M24 23.5v-11l6.6 5.5z"></svg:path><svg:path fill="#FF5722" d="M28.9 24.4c0 .2.1.4.1.6c0 2.8-2.2 5-5 5s-5-2.2-5-5s2.2-5 5-5c.7 0 1.4.2 2 .4v-4.2c-.6-.1-1.3-.2-2-.2c-5 0-9 4-9 9s4 9 9 9s9-4 9-9c0-1.2-.2-2.4-.7-3.4z"></svg:path>`,
})
export class FlatColorIconsMakeDecisionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
