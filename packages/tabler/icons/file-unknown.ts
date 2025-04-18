import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileUnknownIcon],svg[tabler-file-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2m-5-4v.01"></svg:path><svg:path d="M12 14a1.5 1.5 0 1 0-1.14-2.474"></svg:path></svg:g>`,
})
export class TablerFileUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
