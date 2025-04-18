import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomReplaceIcon],svg[tabler-zoom-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 21l-6-6M3.291 8a7 7 0 0 1 5.077-4.806a7.02 7.02 0 0 1 8.242 4.403"></svg:path><svg:path d="M17 4v4h-4m3.705 4a7 7 0 0 1-5.074 4.798a7.02 7.02 0 0 1-8.241-4.403"></svg:path><svg:path d="M3 16v-4h4"></svg:path></svg:g>`,
})
export class TablerZoomReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
