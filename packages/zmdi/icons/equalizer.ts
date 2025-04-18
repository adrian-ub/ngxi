import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiEqualizerIcon],svg[zmdi-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 363V21h85v342zM0 363V192h85v171zm256-235h85v235h-85z"></svg:path>`,
})
export class ZmdiEqualizerIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
