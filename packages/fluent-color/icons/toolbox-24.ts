import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorToolbox24Icon],svg[fluent-color-toolbox-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorToolbox240)" d="M7 7.5V6.252a2.25 2.25 0 0 1 2.25-2.25h5.5A2.25 2.25 0 0 1 17 6.252V7.5h-1.5V6.252a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75V7.5z"></svg:path><svg:path fill="url(#fluentColorToolbox241)" d="M4.25 19.997A2.25 2.25 0 0 1 2 17.747V11.5h20v6.247a2.25 2.25 0 0 1-2.25 2.25z"></svg:path><svg:path fill="url(#fluentColorToolbox242)" d="M2 9.25A2.25 2.25 0 0 1 4.25 7h15.5A2.25 2.25 0 0 1 22 9.25V12H2z"></svg:path><svg:path fill="url(#fluentColorToolbox243)" d="M16.75 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="url(#fluentColorToolbox244)" d="M7.25 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75"></svg:path><svg:defs><svg:lineargradient id="fluentColorToolbox240" x1="3.429" x2="3.84" y1="4.002" y2="7.069" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox241" x1=".75" x2="2.577" y1="8.314" y2="28.314" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox242" x1=".75" x2="1.128" y1="5.125" y2="17.094" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox243" x1="2.571" x2="3.327" y1="10" y2="14.331" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorToolbox244" x1="2.571" x2="3.327" y1="10" y2="14.331" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EFEFEF"></svg:stop><svg:stop offset="1" stop-color="#DADADA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorToolbox24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
