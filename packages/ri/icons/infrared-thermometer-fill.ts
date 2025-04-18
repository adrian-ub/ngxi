import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInfraredThermometerFillIcon],svg[ri-infrared-thermometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v9h-3.001L18 12a4 4 0 0 1-4 4h-1.379l-.613 3.111l.911 1.321A1 1 0 0 1 12.096 22H3l2.313-10.024L3 11l4-9zm-5.001 9h-2.394l-.591 3H14a2 2 0 0 0 2-2z"></svg:path>`,
})
export class RiInfraredThermometerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
