import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorListBar16Icon],svg[fluent-color-list-bar-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorListBar160)" d="M5 14h7.75c.69 0 1.25-.56 1.25-1.25v-.5c0-.69-.56-1.25-1.25-1.25H5l-.5 1.5zm0-4h7.75c.69 0 1.25-.56 1.25-1.25v-1.5C14 6.56 13.44 6 12.75 6H5l-.5 2zm0-5h7.75C13.44 5 14 4.44 14 3.75v-.5C14 2.56 13.44 2 12.75 2H5l-.5 1.5z"></svg:path><svg:path fill="url(#fluentColorListBar161)" d="M5 6v4H3.25C2.56 10 2 9.44 2 8.75v-1.5C2 6.56 2.56 6 3.25 6zm0-4v3H3.25C2.56 5 2 4.44 2 3.75v-.5C2 2.56 2.56 2 3.25 2zm0 9v3H3.25C2.56 14 2 13.44 2 12.75v-.5c0-.69.56-1.25 1.25-1.25z"></svg:path><svg:defs><svg:lineargradient id="fluentColorListBar160" x1="3.075" x2="13.243" y1=".286" y2="13.855" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar161" x1="2.713" x2="7.395" y1="3.595" y2="5.464" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorListBar16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
