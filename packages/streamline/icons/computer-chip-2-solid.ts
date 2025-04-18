import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerChip2SolidIcon],svg[streamline-computer-chip-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1.5A1.5 1.5 0 0 1 4 0h6a1.5 1.5 0 0 1 1.5 1.5v.835h1.687a.75.75 0 0 1 0 1.5H11.5V6.25h1.687a.75.75 0 0 1 0 1.5H11.5v2.415h1.687a.75.75 0 0 1 0 1.5H11.5v.835A1.5 1.5 0 0 1 10 14H4a1.5 1.5 0 0 1-1.5-1.5v-.835H.813a.75.75 0 0 1 0-1.5H2.5V7.75H.813a.75.75 0 0 1 0-1.5H2.5V3.835H.813a.75.75 0 0 1 0-1.5H2.5zm4.848 9.682a.625.625 0 1 0 0 1.25h2a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineComputerChip2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
