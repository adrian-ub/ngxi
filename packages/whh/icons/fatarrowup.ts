import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowupIcon],svg[whh-fatarrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 383v512q0 53-37.5 90.5T896 1023H128q-53 0-90.5-37.5T0 895V383h1q0-41 39-70L418 29q39-29 94.5-29T607 29l378 284q39 29 39 70"></svg:path>`,
})
export class WhhFatarrowupIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
