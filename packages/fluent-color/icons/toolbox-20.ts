import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorToolbox20Icon],svg[fluent-color-toolbox-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorToolbox200)" d="M6 4.75C6 3.784 6.784 3 7.75 3h4.5c.966 0 1.75.784 1.75 1.75V7.5h-1.5V4.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25V7.5H6z"></svg:path><svg:path fill="url(#fluentColorToolbox201)" d="M16 17a2 2 0 0 0 2-2V9.5H2V15a2 2 0 0 0 2 2z"></svg:path><svg:path fill="url(#fluentColorToolbox202)" d="M4 6a2 2 0 0 0-2 2v2h16V8a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorToolbox203)" d="M6.75 9a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 6.75 9"></svg:path><svg:path fill="url(#fluentColorToolbox204)" d="M13.25 9a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75"></svg:path><svg:defs><svg:lineargradient id="fluentColorToolbox200" x1="3.143" x2="3.971" y1="3" y2="6.837" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox201" x1="1" x2="2.776" y1="6.688" y2="24.31" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox202" x1="1" x2="1.303" y1="4.5" y2="14.075" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox203" x1="3.143" x2="3.52" y1="9" y2="11.623" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox204" x1="3.143" x2="3.52" y1="9" y2="11.623" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorToolbox20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
