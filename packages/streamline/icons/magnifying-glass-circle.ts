import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMagnifyingGlassCircleIcon],svg[streamline-magnifying-glass-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M6.5 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m3.5 1L8.27 8.27"></svg:path></svg:g>`,
})
export class StreamlineMagnifyingGlassCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
