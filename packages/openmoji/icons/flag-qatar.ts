import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagQatarIcon],svg[openmoji-flag-qatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#781e32" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 17h14l7 2.5l-6.5 2.4l6.5 2.3l-6.5 2.4l6.5 2.3l-6.5 2.4l6.5 2.4l-6.5 2.3l6.5 2.4l-6.5 2.3l6.5 2.4l-6.5 2.4l6.5 2.3l-6.5 2.4l6.5 2.3l-7 2.5H5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagQatarIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
