import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSolarPowerIcon],svg[ic-twotone-solar-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.44 20H11v-2H4.84zm13.92-6H13v2h5.76zM13 18v2h6.56l-.4-2zm-7.76-2H11v-2H5.64z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 12H4L2 22h20zm-7 2h5.36l.4 2H13zm-2 6H4.44l.4-2H11zm0-4H5.24l.4-2H11zm2 4v-2h6.16l.4 2zM11 8h2v3h-2zm4.764-.795l1.415-1.414L19.3 7.912l-1.414 1.414zm-11.059.708L6.826 5.79L8.24 7.206L6.12 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5"></svg:path><svg:path fill="currentColor" d="M15 2c0 1.66-1.34 3-3 3S9 3.66 9 2z" opacity=".3"></svg:path>`,
})
export class IcTwotoneSolarPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
