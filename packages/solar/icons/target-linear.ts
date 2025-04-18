import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTargetLinearIcon],svg[solar-target-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="M2 12h3m14 0h3M12 22v-3m0-14V2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 12h4m-2 2v-4"></svg:path></svg:g>`,
})
export class SolarTargetLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
