import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashTumbleDryIcon],svg[tabler-wash-tumble-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0"></svg:path></svg:g>`,
})
export class TablerWashTumbleDryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
