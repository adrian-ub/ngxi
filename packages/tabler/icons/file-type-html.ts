import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileTypeHtmlIcon],svg[tabler-file-type-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 21v-6m3 0v6m-3-3h3m15-3v6h2m-9 0v-6l2 3l2-3v6m-9.5-6h3M9 15v6"></svg:path></svg:g>`,
})
export class TablerFileTypeHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
