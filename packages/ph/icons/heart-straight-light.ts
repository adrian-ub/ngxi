import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightLightIcon],svg[ph-heart-straight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.6 58.38a56.06 56.06 0 0 0-79.12-.08L128 71.78L113.52 58.3a56 56 0 0 0-79.15 79.25l89.36 90.66a6 6 0 0 0 8.54 0l89.33-90.62a56 56 0 0 0 0-79.21m-8.52 70.75L128 215.45L42.89 129.1a44 44 0 0 1 62.22-62.23a1 1 0 0 0 .16.14l18.64 17.36a6 6 0 0 0 8.18 0L150.73 67a1 1 0 0 0 .16-.14a44 44 0 1 1 62.19 62.26Z"></svg:path>`,
})
export class PhHeartStraightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
