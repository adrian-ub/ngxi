import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineForkKnifeIcon],svg[streamline-fork-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 13.5V.5c4 2 4.5 7.5 4.5 9.5H8.5M3.5.5v13M6 .5V3a2.5 2.5 0 0 1-2.5 2.5v0A2.5 2.5 0 0 1 1 3V.5"></svg:path>`,
})
export class StreamlineForkKnifeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
