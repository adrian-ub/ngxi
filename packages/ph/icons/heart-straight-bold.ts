import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBoldIcon],svg[ph-heart-straight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.84 54.13a62.07 62.07 0 0 0-87.52-.13L128 63.58L117.68 54a62 62 0 0 0-87.58 87.8l89.35 90.65a12 12 0 0 0 17.1 0l89.29-90.59a62 62 0 0 0 0-87.7Zm-17 70.79L128 206.9l-80.87-82.05a38 38 0 0 1 53.74-53.74c.1.1.2.2.31.29l18.64 17.36a12 12 0 0 0 16.36 0l18.64-17.36c.11-.09.21-.19.31-.29a38 38 0 1 1 53.68 53.81Z"></svg:path>`,
})
export class PhHeartStraightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
