import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoGraphIcon],svg[material-symbols-auto-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 9L7.4 6.6L5 5.5l2.4-1.1L8.5 2l1.1 2.4L12 5.5L9.6 6.6L8.5 9Zm6.5 3l-.95-2.05L12 9l2.05-.95L15 6l.95 2.05L18 9l-2.05.95L15 12ZM4 14l-.95-2.05L1 11l2.05-.95L4 8l.95 2.05L7 11l-2.05.95L4 14Zm.5 6.5L3 19l7.5-7.5l4 4l7.1-7.975l1.4 1.4l-8.5 9.575l-4-4l-6 6Z"></svg:path>`,
})
export class MaterialSymbolsAutoGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
