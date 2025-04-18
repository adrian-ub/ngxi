import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFaviconIcon],svg[tabler-favicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm4 2v4"></svg:path><svg:path d="M11 10a2 2 0 1 0 0 4m3-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerFaviconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
