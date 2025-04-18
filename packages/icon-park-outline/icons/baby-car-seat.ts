import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBabyCarSeatIcon],svg[icon-park-outline-baby-car-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m36 33l6-29s-10.5 2-10.5 6c0 2.5 4 4 2.5 5.5s-7 3-7 7c0 2.5 1.64 4.36 0 6c-1.5 1.5-3 .714-5.5 0c-2.8-.8-8.5-1.5-10.5-1S7 29 7 32c0 1.65 1 3.5 3.5 4s5.5-2 9.5-2s9 3 12 3s4-4 4-4Z"></svg:path><svg:path d="m11 36l-3 8h33l-6-8"></svg:path></svg:g>`,
})
export class IconParkOutlineBabyCarSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
