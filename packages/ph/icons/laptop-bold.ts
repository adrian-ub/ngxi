import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLaptopBoldIcon],svg[ph-laptop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 156h-4V72a28 28 0 0 0-28-28H56a28 28 0 0 0-28 28v84h-4a12 12 0 0 0-12 12v24a28 28 0 0 0 28 28h176a28 28 0 0 0 28-28v-24a12 12 0 0 0-12-12M52 72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v84H52Zm168 120a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-12h184Zm-64-96a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhLaptopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
