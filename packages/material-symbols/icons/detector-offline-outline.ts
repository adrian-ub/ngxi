import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDetectorOfflineOutlineIcon],svg[material-symbols-detector-offline-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 21L8 19.6l2.6-2.6L8 14.4L9.4 13l2.6 2.6l2.6-2.6l1.4 1.4l-2.6 2.6l2.6 2.6l-1.4 1.4l-2.6-2.6zM5 5v1h14V5zm3.1 3l.3 1h7.2l.3-1zm.3 3q-.65 0-1.175-.387T6.5 9.6L6 8H5q-.825 0-1.412-.587T3 6V3h18v3q0 .825-.587 1.413T19 8h-1l-.65 1.7q-.225.575-.725.938T15.5 11zM5 5v1z"></svg:path>`,
})
export class MaterialSymbolsDetectorOfflineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
