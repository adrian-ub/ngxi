import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrowserCheckIcon],svg[tabler-browser-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 3h16M8 4v4"></svg:path><svg:path d="M9.5 14.5L11 16l3-3"></svg:path></svg:g>`,
})
export class TablerBrowserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
