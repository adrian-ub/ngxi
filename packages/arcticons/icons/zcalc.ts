import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZcalcIcon],svg[arcticons-zcalc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M11.316 30.91h10.992m5.298 1.996h9.078m-9.178-4h9.078M12.272 15.8h9.08m-4.54 9.584v11.053m11.156-24.874l8.154 8.43m0-8.43l-8.154 8.43"></svg:path>`,
})
export class ArcticonsZcalcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
