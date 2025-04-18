import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilRibbonIcon],svg[il-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M371 8q19 0 33 13t13 34v676q0 12-11 17t-20-3L212 591q-4-3-7 0L31 745q-9 8-20 3T0 731V55q0-20 14-34T46 8z"></svg:path>`,
})
export class IlRibbonIcon {
  readonly viewBox = input("0 0 420 850")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
