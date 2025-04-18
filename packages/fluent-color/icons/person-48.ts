import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPerson48Icon],svg[fluent-color-person-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPerson480)" d="M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.756 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.756 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"></svg:path><svg:path fill="url(#fluentColorPerson481)" d="M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.756 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.756 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"></svg:path><svg:path fill="url(#fluentColorPerson482)" d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10S29.523 4 24 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorPerson480" x1="15.61" x2="20.779" y1="30.127" y2="46.635" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson481" x1="24" x2="31.238" y1="26.095" y2="53.143" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#885EDB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#E362F8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPerson482" x1="18.756" x2="28.949" y1="6.659" y2="22.934" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPerson48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
