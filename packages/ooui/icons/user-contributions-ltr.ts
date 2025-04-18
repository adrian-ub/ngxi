import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserContributionsLtrIcon],svg[ooui-user-contributions-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.5" cy="10.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M1 15h8v2H1Zm0-6h10v2H1Zm0-6h16v2H1Zm14.5 10.6c-3.3 0-4.5 1.6-4.5 2.7V18h9v-1.7c0-1-1.2-2.7-4.5-2.7"></svg:path>`,
})
export class OouiUserContributionsLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
