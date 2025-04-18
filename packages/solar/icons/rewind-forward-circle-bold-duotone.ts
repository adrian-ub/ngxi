import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleBoldDuotoneIcon],svg[solar-rewind-forward-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.436 7.461a.75.75 0 1 0-.872 1.22l3.222 2.302a1.25 1.25 0 0 1 0 2.034l-3.222 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476z"></svg:path><svg:path fill="currentColor" d="M7.5 15.132V8.869a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132a1 1 0 0 1-1.555-.832"></svg:path>`,
})
export class SolarRewindForwardCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
