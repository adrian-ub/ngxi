import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomOutFilledIcon],svg[tabler-zoom-out-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1-2.008 2.225l-.114-.103l-4.943-4.944a8 8 0 0 1-12.49-6.332L2 10l.005-.285A8 8 0 0 1 14 3.072M13 9H7l-.117.007a1 1 0 0 0 0 1.986L7 11h6l.117-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerZoomOutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
