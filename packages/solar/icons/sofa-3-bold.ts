import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BoldIcon],svg[solar-sofa-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 12.75c.967-3.884 1.396-5.903.384-7.322a4 4 0 0 0-.215-.275C18.722 3.75 16.481 3.75 12 3.75s-6.72 0-7.918 1.403q-.114.133-.215.275c-1.012 1.42-.583 3.438.384 7.322zm-15 5v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2z"></svg:path>`,
})
export class SolarSofa3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
