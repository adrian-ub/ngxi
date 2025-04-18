import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFiberSmartRecordIcon],svg[material-symbols-light-fiber-smart-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.004 18q-2.506 0-4.255-1.745T3 12.004t1.745-4.255T8.996 6t4.255 1.745T15 11.996t-1.745 4.255T9.004 18M16 17.9v-1q1.75-.35 2.875-1.725T20 12t-1.125-3.175T16 7.1v-1q2.177.35 3.589 2.024T21 12t-1.412 3.876T16 17.9"></svg:path>`,
})
export class MaterialSymbolsLightFiberSmartRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
