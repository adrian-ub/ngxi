import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsZoomOutMapIcon],svg[material-symbols-zoom-out-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zm12 0v-2h2.6l-3.1-3.1l1.4-1.4l3.1 3.1V15h2v6zM8.1 9.5L5 6.4V9H3V3h6v2H6.4l3.1 3.1zm7.8 0l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4z"></svg:path>`,
})
export class MaterialSymbolsZoomOutMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
