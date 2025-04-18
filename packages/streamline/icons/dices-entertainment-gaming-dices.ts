import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDicesEntertainmentGamingDicesIcon],svg[streamline-dices-entertainment-gaming-dices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.929 3.286V1.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v5.429a1 1 0 0 0 1 1h1.786m3.785-1.858H12.5s1 0 1 1V12.5s0 1-1 1H7.071s-1 0-1-1V7.071s0-1 1-1"></svg:path><svg:path d="M8.654 11.166a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M3.221 3.505a.25.25 0 0 1 0-.5"></svg:path><svg:path d="M3.22 3.505a.25.25 0 0 0 0-.5m7.699 6.1a.25.25 0 0 1 0-.5"></svg:path><svg:path d="M10.918 9.105a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineDicesEntertainmentGamingDicesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
