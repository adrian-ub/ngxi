import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonExportIcon],svg[carbon-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 24v4H6v-4H4v4l.008-.005A2 2 0 0 0 6 30h20a2 2 0 0 0 2-2v-4zM6 12l1.411 1.405L15 5.825V24h2V5.825l7.591 7.58L26 12L16 2z"></svg:path>`,
})
export class CarbonExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
