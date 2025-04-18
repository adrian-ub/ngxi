import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUninstallFillIcon],svg[ri-uninstall-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 14H5v4h14zm-2 1v2h-2v-2zM12 2L8 6h3v5h2V6h3z"></svg:path>`,
})
export class RiUninstallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
