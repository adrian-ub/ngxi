import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileExportIcon],svg[la-file-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v24h20v-8l-2 2v4H8V6h16v4l2 2V4zm16.406 7L21 12.406L23.563 15h-9.657v2h9.656L21 19.594L22.406 21l4.313-4.281l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaFileExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
