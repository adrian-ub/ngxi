import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkDice6ActiveIcon],svg[nrk-dice-6-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 2H2v20h20zM6 8a2 2 0 1 0 .001-3.999A2 2 0 0 0 6 8m0 6a2 2 0 1 0 .001-3.999A2 2 0 0 0 6 14m2 4a2 2 0 1 1-3.999.001A2 2 0 0 1 8 18M18 8a2 2 0 1 0 .001-3.999A2 2 0 0 0 18 8m2 4a2 2 0 1 1-3.999.001A2 2 0 0 1 20 12m-2 8a2 2 0 1 0 .001-3.999A2 2 0 0 0 18 20" clip-rule="evenodd"></svg:path>`,
})
export class NrkDice6ActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
