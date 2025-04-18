import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightDownloadIcon],svg[mdi-light-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v12.25L17.25 11l.75.66l-6.5 6.5l-6.5-6.5l.75-.66L11 16.25V4zM3 19h1v2h15v-2h1v3H3z"></svg:path>`,
})
export class MdiLightDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
