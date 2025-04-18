import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserContributionsRtlIcon],svg[ooui-user-contributions-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4.5" cy="10.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 15h-8v2h8zm0-6H9v2h10Zm0-6H3v2h16ZM4.5 13.6c3.3 0 4.5 1.6 4.5 2.7V18H0v-1.7c0-1 1.2-2.7 4.5-2.7"></svg:path>`,
})
export class OouiUserContributionsRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
