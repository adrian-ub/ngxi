import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFitnessIcon],svg[picon-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6V1h2v5M1 6V1h2v5M0 4V3h8v1"></svg:path>`,
})
export class PiconFitnessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
