import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDeliveryTruckIcon],svg[marketeq-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M19.104 35.417h7.98V12.5A2.083 2.083 0 0 0 25 10.417H10.417M6.25 27.083v6.25a2.083 2.083 0 0 0 2.083 2.084h1.813"></svg:path><svg:path stroke="#306CFE" d="M30.98 35.417h-3.897V14.584h8.855a2.08 2.08 0 0 1 2.083 1.52l1.562 5.771l2.584.646a2.08 2.08 0 0 1 1.583 2.083v8.73a2.083 2.083 0 0 1-2.083 2.083h-1.855"></svg:path><svg:path stroke="#344054" d="M6.25 18.75h12.5m-4.167 12.5a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333m20.834 0a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqDeliveryTruckIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
