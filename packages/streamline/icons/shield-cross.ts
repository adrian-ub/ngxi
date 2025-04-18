import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShieldCrossIcon],svg[streamline-shield-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.433a1 1 0 0 1-.72 0A9.565 9.565 0 0 1 .504 4.498V1.499A1 1 0 0 1 1.503.5h10.994a1 1 0 0 1 1 1v2.998a9.565 9.565 0 0 1-6.137 8.935"></svg:path><svg:path d="M8 3.008H6v2H4.001v1.998h2v2h1.998v-2h2V5.007h-2z"></svg:path></svg:g>`,
})
export class StreamlineShieldCrossIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
