import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMagnifyingGlassCircleSolidIcon],svg[streamline-magnifying-glass-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M6.5 4.625a1.875 1.875 0 1 0 0 3.75a1.875 1.875 0 0 0 0-3.75M3.375 6.5a3.125 3.125 0 1 1 5.732 1.723l1.335 1.335a.625.625 0 1 1-.884.884L8.223 9.107A3.125 3.125 0 0 1 3.375 6.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMagnifyingGlassCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
