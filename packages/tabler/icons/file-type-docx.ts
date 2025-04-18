import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileTypeDocxIcon],svg[tabler-file-type-docx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm15 1.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0M9.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 9.5 15m10 0l3 6m-3 0l3-6"></svg:path></svg:g>`,
})
export class TablerFileTypeDocxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
