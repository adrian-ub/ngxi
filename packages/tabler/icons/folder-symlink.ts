import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFolderSymlinkIcon],svg[tabler-folder-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 21v-4a3 3 0 0 1 3-3h5"></svg:path><svg:path d="m8 17l3-3l-3-3"></svg:path><svg:path d="M3 11V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8"></svg:path></svg:g>`,
})
export class TablerFolderSymlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
