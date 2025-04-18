import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuningLinearIcon],svg[solar-tuning-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 14.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-10-5a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"></svg:path><svg:path stroke-linecap="round" d="M16.959 9V2m-10 13v7m10 0v-2m-10-18v2"></svg:path></svg:g>`,
})
export class SolarTuningLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
