import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFileSymlinkIcon],svg[charm-file-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 7.75v-6h5.5l5 5v7.5h-4"></svg:path><svg:path d="M7.75 2.25v5h5m-10 7l3.5-3.5m0 3v-3h-3"></svg:path></svg:g>`,
})
export class CharmFileSymlinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
