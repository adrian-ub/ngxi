import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning3BoldDuotoneIcon],svg[solar-tuning-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" d="M12.75 10.145a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zm-1.5 3.71a2 2 0 0 0 1.5 0V19a.75.75 0 0 1-1.5 0zm8-1.71a2 2 0 0 1 1.5 0V5a.75.75 0 0 0-1.5 0zm0 3.71V19a.75.75 0 0 0 1.5 0v-3.145a2 2 0 0 1-1.5 0m-14.5-7.71a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zm0 3.71a2 2 0 0 1-1.5 0V19a.75.75 0 0 0 1.5 0z" opacity=".5"></svg:path>`,
})
export class SolarTuning3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
