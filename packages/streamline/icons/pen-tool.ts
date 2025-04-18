import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePenToolIcon],svg[streamline-pen-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.881 4.754L.607 12.82a.5.5 0 0 0 .572.572l8.067-1.274a1 1 0 0 0 .838-.877L10.5 7.5l-4-4l-3.742.416a1 1 0 0 0-.877.838M6.5 3.5l2-3m2 7l3-2M1 13l4-4M4 8l2 2"></svg:path>`,
})
export class StreamlinePenToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
