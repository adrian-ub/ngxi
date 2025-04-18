import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilPieIcon],svg[il-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 356q-10 0-16-7t-7-16V11q66 8 124 38t100 75t69 105t30 127zm-93 45q0 10 7 17t17 7h367q-9 72-44 133t-88 106t-121 67t-145 17q-68-6-128-35t-105-76t-74-106T1 403q-5-78 20-148t73-123t113-86T347 9z"></svg:path>`,
})
export class IlPieIcon {
  readonly viewBox = input("0 0 740 850")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
