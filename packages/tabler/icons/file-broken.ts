import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileBrokenIcon],svg[tabler-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M5 7V5a2 2 0 0 1 2-2h7l5 5v2m0 9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m0-3h.01M5 13h.01M5 10h.01M19 13h.01M19 16h.01"></svg:path></svg:g>`,
})
export class TablerFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
