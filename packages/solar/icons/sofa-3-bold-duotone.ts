import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BoldDuotoneIcon],svg[solar-sofa-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 17.75v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2z"></svg:path><svg:path fill="currentColor" d="M19.75 12.75c.966-3.884 1.395-5.903.384-7.322a4 4 0 0 0-.215-.275C18.72 3.75 16.48 3.75 11.999 3.75s-6.721 0-7.919 1.403q-.113.133-.215.275c-1.011 1.42-.582 3.438.385 7.322l.2 1h15.1z" opacity=".5"></svg:path>`,
})
export class SolarSofa3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
