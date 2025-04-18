import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPerspectiveBoldIcon],svg[ph-perspective-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 116h-12V48a20 20 0 0 0-23.58-19.67l-160 29.09A20 20 0 0 0 28 77.09V116H16a12 12 0 0 0 0 24h12v38.91a20 20 0 0 0 16.42 19.67l160 29.09A20 20 0 0 0 228 208v-68h12a12 12 0 0 0 0-24M52 80.43L204 52.8V116H52ZM204 203.2L52 175.57V140h152Z"></svg:path>`,
})
export class PhPerspectiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
