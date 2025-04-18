import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMagnifyingGlassIcon],svg[streamline-magnifying-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 11.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m7.5 2L10 10"></svg:path>`,
})
export class StreamlineMagnifyingGlassIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
