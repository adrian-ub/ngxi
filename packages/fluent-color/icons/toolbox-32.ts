import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorToolbox32Icon],svg[fluent-color-toolbox-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorToolbox320)" d="M9 6.25A3.25 3.25 0 0 1 12.25 3h7.5A3.25 3.25 0 0 1 23 6.25V8.5h-2V6.25C21 5.56 20.44 5 19.75 5h-7.5C11.56 5 11 5.56 11 6.25V8.5H9z"></svg:path><svg:path fill="url(#fluentColorToolbox321)" d="M5.25 28A3.25 3.25 0 0 1 2 24.75V15.5h28v9.25A3.25 3.25 0 0 1 26.75 28z"></svg:path><svg:path fill="url(#fluentColorToolbox322)" d="M2 11.25A3.25 3.25 0 0 1 5.25 8h21.5A3.25 3.25 0 0 1 30 11.25V16H2z"></svg:path><svg:path fill="url(#fluentColorToolbox323)" d="M22 13a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path><svg:path fill="url(#fluentColorToolbox324)" d="M10 13a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorToolbox320" x1="4" x2="4.724" y1="3" y2="7.8" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox321" x1=".25" x2="3.072" y1="10.813" y2="40.212" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox322" x1=".25" x2=".942" y1="5" y2="24.145" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox323" x1="4" x2="4.858" y1="13" y2="18.214" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox324" x1="4" x2="4.858" y1="13" y2="18.214" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorToolbox32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
