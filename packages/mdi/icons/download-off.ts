import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadOffIcon],svg[mdi-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L18.11 20H5v-2h11.11l-3.05-3.05L12 16L5 9h2.11l-6-6l1.28-1.27l19.72 19.73zM19 9h-4V3H9v2.8l6.6 6.6z"></svg:path>`,
})
export class MdiDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
