import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBaggageIcon],svg[streamline-baggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 4h-9a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 13.5V4m6 9.5V4M4.5 4a2.5 2.5 0 1 1 5 0"></svg:path>`,
})
export class StreamlineBaggageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
