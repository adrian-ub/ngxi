import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPollHIcon],svg[la-poll-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3 3v2h8v-2zm0 5v2h12v-2zm0 5v2h6v-2z"></svg:path>`,
})
export class LaPollHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
