import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGolfHoleIcon],svg[hugeicons-golf-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.491 16.995c-2.643.397-4.49 1.373-4.49 2.43C4 20.846 7.35 22 11.484 22s7.486-1.153 7.486-2.576c0-1.121-2.083-2.076-4.99-2.43"></svg:path><svg:path d="M10.98 19.028c.083-7.174-.197-13.89.171-16.14c.28-.796.771-1.593 3.998.175l2.18 1.069c1.342.657 3.21 1.706 2.441 2.987c-.35.583-1.145 1.235-2.7 1.897l-6.092 2.968"></svg:path></svg:g>`,
})
export class HugeiconsGolfHoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
