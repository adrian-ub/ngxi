import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileSymlinkIcon],svg[tabler-file-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 21v-4a3 3 0 0 1 3-3h5"></svg:path><svg:path d="m9 17l3-3l-3-3m5-8v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H7.5"></svg:path></svg:g>`,
})
export class TablerFileSymlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
