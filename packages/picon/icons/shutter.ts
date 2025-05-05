import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShutterIcon],svg[picon-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0q2 0 2 2L5 4m0 1l3-2v2M4 5l4 1q0 2-2 2M3 5l2 3H3M2 8Q0 8 0 6l3-2M0 3h3L0 5m0-3q0-2 2-2l2 3M3 0h2v3"></svg:path>`,
})
export class PiconShutterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
