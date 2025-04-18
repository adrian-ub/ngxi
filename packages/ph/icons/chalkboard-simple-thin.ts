import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleThinIcon],svg[ph-chalkboard-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12v-28a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v28H36V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v80a4 4 0 0 0 8 0V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8m-76-24h56v24h-56Z"></svg:path>`,
})
export class PhChalkboardSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
