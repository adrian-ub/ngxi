import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayHurtIcon],svg[subway-hurt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 28.3c-64 0-96.2 27.6-128 64c-31.8-36.4-64-64-128-64S0 71 0 199c0 64 64 192 256 298.7C448 391 512 263 512 199c0-128-64-170.7-128-170.7"></svg:path>`,
})
export class SubwayHurtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
