import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHandtwofingersIcon],svg[whh-handtwofingers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H128q-30 0-61-51T18 862T0 768V512q0-26 19-45t45-19q19 0 36 12L64 70q-2-28 15-48.5T122 0t46 17.5T189 63l35 321q5 11 14.5 21.5T256 416l35-353q1-27 20.5-45.5T357 0t43.5 21.5T416 70q-32 186-32 378q0-26 18.5-45t45-19t45.5 19t19 45v64q0-26 18.5-45t45-19t45.5 19t19 45v224q0 63-13 115.5t-32 83t-38 52t-32 29.5z"></svg:path>`,
})
export class WhhHandtwofingersIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
