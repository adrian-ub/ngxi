import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitModemIcon],svg[uit-modem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 17 16.5m4.987-3.064a.5.5 0 0 0-.02-.095a.5.5 0 0 0-.043-.09l-.05-.073a.5.5 0 0 0-.08-.072c-.016-.012-.027-.029-.044-.039l-15.58-9a.5.5 0 1 0-.5.866L19.637 13H3.5a.5.5 0 0 0-.5.5v5A2.5 2.5 0 0 0 5.5 21h14a2.5 2.5 0 0 0 2.5-2.5v-5c0-.023-.01-.043-.013-.064M21 18.5a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 4 18.5V14h17z"></svg:path>`,
})
export class UitModemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
