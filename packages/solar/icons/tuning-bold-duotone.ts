import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuningBoldDuotoneIcon],svg[solar-tuning-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.752 14.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-10-5a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path fill="currentColor" d="M7.462 6.584a3 3 0 0 0-1.5.021V2a.75.75 0 0 1 1.5 0zm-1.5 5.81a3 3 0 0 0 1.5.021V22a.75.75 0 0 1-1.5 0zm10 5V22a.75.75 0 0 0 1.5 0v-4.585a3 3 0 0 1-1.5-.021m1.5-5.81V2a.75.75 0 0 0-1.5 0v9.605a3 3 0 0 1 1.5-.021" opacity=".5"></svg:path>`,
})
export class SolarTuningBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
