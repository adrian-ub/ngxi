import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMilkCoconutIcon],svg[hugeicons-milk-coconut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.971 21.999h-2.96m10.014-13.96L15.74 5.215a1 1 0 0 1-.223-.65l.021-1.033a1.5 1.5 0 0 0-1.5-1.53h-7.55a1.5 1.5 0 0 0-1.5 1.5v1.444L2.563 7.457a2 2 0 0 0-.561 1.39v11.152a2 2 0 0 0 2 2H8.01m10.015-13.96v2.043m0-2.043H7.84M5.026 4.946L7.45 7.457a2 2 0 0 1 .39.582m.171 13.96V8.846a2 2 0 0 0-.17-.807m5.407 10.536c-.654-.654.009-2.377 1.48-3.848c1.472-1.47 3.195-2.133 3.85-1.48m-5.33 5.328c0 .592.355 1.539.888 2.072a4.606 4.606 0 0 0 6.514 0a4.603 4.603 0 0 0 0-6.512c-.534-.533-1.48-.888-2.073-.888m-5.329 5.328c.564.563 1.921.15 3.227-.917m2.102-4.41c.654.653-.009 2.376-1.48 3.847a8 8 0 0 1-.622.563m0 0c.109.7.326 1.509 1.51 2.1" color="currentColor"></svg:path>`,
})
export class HugeiconsMilkCoconutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
