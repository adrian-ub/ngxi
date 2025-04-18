import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsArchiveIcon],svg[humbleicons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3H3z"></svg:path><svg:path stroke-linecap="round" d="M9.5 13h5"></svg:path><svg:path stroke-linejoin="round" d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class HumbleiconsArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
