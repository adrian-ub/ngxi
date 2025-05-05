import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconElectricguitarIcon],svg[picon-electricguitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V5l2 2m4-6l1-1v1M4 2l1-1v1M2 3l1-1v1M0 4l1-1v1m0 1l7-4v2L6 4L5 6H2"></svg:path>`,
})
export class PiconElectricguitarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
