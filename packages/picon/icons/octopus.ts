import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOctopusIcon],svg[picon-octopus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v1h1V1M1 1v1h1V1m5 2q2 8-1 2q0 6-2 0q-2 6-2 0q-3 6-1-2c-5-4 11-4 6 0"></svg:path>`,
})
export class PiconOctopusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
