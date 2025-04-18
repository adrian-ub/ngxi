import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePottedFlowerTulipIcon],svg[streamline-potted-flower-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4V.5l3.5 2l3.5-2V4a3.5 3.5 0 1 1-7 0M7 7.5v6m0-1v1h2.5a3 3 0 0 0 3-3V10a.5.5 0 0 0-.5-.5h-2a3 3 0 0 0-3 3M1.5 10v.5a3 3 0 0 0 3 3H7v-1a3 3 0 0 0-3-3H2a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class StreamlinePottedFlowerTulipIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
