import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHome32Icon],svg[fluent-color-home-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHome320)" d="M11 17h10v12H11z"></svg:path><svg:path fill="url(#fluentColorHome321)" d="M13.895 4.277a3.25 3.25 0 0 1 4.21 0l9.75 8.287A3.25 3.25 0 0 1 29 15.04V26.5a2.5 2.5 0 0 1-2.5 2.5H20v-9a2 2 0 0 0-1.991-2H13.99A2 2 0 0 0 12 20v9H5.5A2.5 2.5 0 0 1 3 26.5V15.04a3.25 3.25 0 0 1 1.145-2.476z"></svg:path><svg:path fill="url(#fluentColorHome322)" fill-rule="evenodd" d="M15.958 5.313L3.448 15.506a1.5 1.5 0 1 1-1.896-2.325L14.722 2.45a2 2 0 0 1 2.593.055l13.182 11.096a1.5 1.5 0 1 1-1.994 2.242z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorHome320" x1="16" x2="8.476" y1="17" y2="30.938" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome321" x1="5.482" x2="30.596" y1="2.256" y2="23.072" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FFB357"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome322" x1="11.152" x2="17.15" y1="-1.378" y2="15.727" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHome32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
