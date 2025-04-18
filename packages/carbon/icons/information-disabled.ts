import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInformationDisabledIcon],svg[carbon-information-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.414L28.586 2L2 28.586L3.414 30l3.443-3.443a13.961 13.961 0 0 0 19.7-19.7zM28 16a11.973 11.973 0 0 1-19.732 9.146L15 18.414V22h-2v2h7v-2h-3v-5.586l8.146-8.146A11.9 11.9 0 0 1 28 16M16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8"></svg:path><svg:path fill="currentColor" d="M5.67 22.085A11.983 11.983 0 0 1 22.086 5.67l1.454-1.454A13.985 13.985 0 0 0 4.216 23.54Z"></svg:path>`,
})
export class CarbonInformationDisabledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
