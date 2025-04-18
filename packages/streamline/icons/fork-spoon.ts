import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineForkSpoonIcon],svg[streamline-fork-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.6 6.5c1.325 0 2.4-1.343 2.4-3s-1.075-3-2.4-3s-2.4 1.343-2.4 3s1.075 3 2.4 3m0 0v7M3.5.5v13M6 .5V3a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 1 3V.5"></svg:path>`,
})
export class StreamlineForkSpoonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
