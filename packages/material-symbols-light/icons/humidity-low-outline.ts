import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHumidityLowOutlineIcon],svg[material-symbols-light-humidity-low-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.5q-2.91 0-4.955-2.006T5 13.61q0-1.373.555-2.628t1.487-2.24L12 3.884l4.958 4.858q.933.985 1.487 2.24T19 13.615q0 2.882-2.045 4.884T12 20.5m0-1q2.5 0 4.25-1.703T18 13.615q0-1.177-.45-2.242t-1.3-1.865L12 5.3L7.75 9.508q-.85.801-1.3 1.865T6 13.615q0 2.48 1.75 4.182T12 19.5"></svg:path>`,
})
export class MaterialSymbolsLightHumidityLowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
