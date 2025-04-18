import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonImportExportIcon],svg[carbon-import-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 24v4H4v-4H2v4l.008-.005A2 2 0 0 0 4 30h24a2 2 0 0 0 2-2v-4zm-.4-9.4L24 18.2V4h-2v14.2l-3.6-3.6L17 16l6 6l6-6zM9 4l-6 6l1.4 1.4L8 7.8V22h2V7.8l3.6 3.6L15 10z"></svg:path>`,
})
export class CarbonImportExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
