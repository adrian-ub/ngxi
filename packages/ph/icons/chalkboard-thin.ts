import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChalkboardThinIcon],svg[ph-chalkboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v140h-24v-28a4 4 0 0 0-4-4h-72a4 4 0 0 0-4 4v28H68V84h120v52a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v116H36Zm152 140h-64v-24h64Z"></svg:path>`,
})
export class PhChalkboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
