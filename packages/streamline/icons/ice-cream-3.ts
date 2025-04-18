import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream3Icon],svg[streamline-ice-cream-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.354 6.467l-2.87 6.697a.54.54 0 0 1-.999 0L3.637 6.467"></svg:path><svg:path d="M4.876 6.867a2.129 2.129 0 1 0 0-4.258a2.129 2.129 0 0 0 0 4.258"></svg:path><svg:path d="M4.876 2.619a2.119 2.119 0 1 1 4.238 0"></svg:path><svg:path d="M9.124 6.867a2.129 2.129 0 1 0 0-4.258a2.129 2.129 0 0 0 0 4.258"></svg:path></svg:g>`,
})
export class StreamlineIceCream3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
