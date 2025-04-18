import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPdfIcon],svg[tabler-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-7 4h2a2 2 0 1 0 0-4H3v8m14-4h3m1-4h-4v8"></svg:path>`,
})
export class TablerPdfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
