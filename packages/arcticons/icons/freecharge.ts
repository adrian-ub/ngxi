import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreechargeIcon],svg[arcticons-freecharge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.384 43l-9.141-15.81l-18.631-4.986L41.388 5l-1.345 8.218l-12.481 6.128l2.03 3.513l9.41-4.86l-1.3 8.088l-4.583 2.223l2.86 4.947Z"></svg:path>`,
})
export class ArcticonsFreechargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
