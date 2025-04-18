import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListNumbersFillIcon],svg[ph-list-numbers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56.84 75.58a8 8 0 0 1 3.58-10.74l16-8A8 8 0 0 1 88 64v48a8 8 0 0 1-16 0V76.94l-4.42 2.22a8 8 0 0 1-10.74-3.58M92 180a8 8 0 0 1 0 16H68a8 8 0 0 1-6.4-12.8l21.67-28.89A3.92 3.92 0 0 0 84 152a4 4 0 0 0-7.77-1.33a8 8 0 0 1-15.09-5.34a20 20 0 1 1 35 18.53L84 180Zm100 4h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m0-48h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m0-48h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListNumbersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
