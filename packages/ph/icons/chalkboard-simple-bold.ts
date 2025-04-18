import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChalkboardSimpleBoldIcon],svg[ph-chalkboard-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-4v-28a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v28H44V60h168v60a12 12 0 0 0 24 0V56a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v132h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-68-16h40v16h-40Z"></svg:path>`,
})
export class PhChalkboardSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
