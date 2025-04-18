import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFolderSymlinkIcon],svg[charm-folder-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m1.75 13.25l3.5-3.5m0 3v-3h-3"></svg:path><svg:path d="M8.25 13.25h6v-8.5h-6l-1.5-2h-5v4"></svg:path></svg:g>`,
})
export class CharmFolderSymlinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
