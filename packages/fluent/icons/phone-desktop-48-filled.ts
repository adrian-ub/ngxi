import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneDesktop48FilledIcon],svg[fluent-phone-desktop-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.25A4.25 4.25 0 0 1 13.25 4h26.5A4.25 4.25 0 0 1 44 8.25v17.5A4.25 4.25 0 0 1 39.75 30H32v5h2.75a1.25 1.25 0 1 1 0 2.5H22V35h7.5v-5H22v-8.75A6.25 6.25 0 0 0 15.75 15H9zm-5 13A4.25 4.25 0 0 1 8.25 17h7.5A4.25 4.25 0 0 1 20 21.25v18.5A4.25 4.25 0 0 1 15.75 44h-7.5A4.25 4.25 0 0 1 4 39.75zm5.5 17c0 .69.56 1.25 1.25 1.25h2.5a1.25 1.25 0 1 0 0-2.5h-2.5c-.69 0-1.25.56-1.25 1.25"></svg:path>`,
})
export class FluentPhoneDesktop48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
