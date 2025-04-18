import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInteractiveSegmentationCursorIcon],svg[carbon-interactive-segmentation-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29.414 24L15.999 10.566a2.047 2.047 0 0 0-2.828 0l-2.586 2.586a2.002 2.002 0 0 0 0 2.829l13.414 13.434a2.002 2.002 0 0 0 2.828 0l2.587-2.587a2 2 0 0 0 0-2.828zm-17.415-9.434l2.586-2.585l3.5 3.5l-2.587 2.587l-3.5-3.5zM25.413 28l-8.5-8.519l2.586-2.587L28 25.414z" fill="currentColor"></svg:path><svg:path d="M7 20l2-2l2 2l-2 2z" fill="currentColor"></svg:path><svg:path d="M18 9l2-2l2 2l-2 2z" fill="currentColor"></svg:path><svg:path d="M7 9l2-2l2 2l-2 2z" fill="currentColor"></svg:path><svg:path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></svg:path>`,
})
export class CarbonInteractiveSegmentationCursorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
