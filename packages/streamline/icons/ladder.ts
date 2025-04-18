import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLadderIcon],svg[streamline-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5.5v13m7-13v13M3.5 3h7m-7 4h7m-7 4h7"></svg:path>`,
})
export class StreamlineLadderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
