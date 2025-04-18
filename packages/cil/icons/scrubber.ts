import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilScrubberIcon],svg[cil-scrubber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.856 87.379A239.364 239.364 0 1 0 87.344 425.892A239.364 239.364 0 1 0 425.856 87.379M256.6 464c-114.341 0-207.365-93.023-207.365-207.365S142.259 49.271 256.6 49.271s207.364 93.023 207.364 207.364S370.941 464 256.6 464"></svg:path><svg:path fill="currentColor" d="M256.6 192.635a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32"></svg:path>`,
})
export class CilScrubberIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
