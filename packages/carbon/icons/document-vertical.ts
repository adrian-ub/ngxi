import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentVerticalIcon],svg[carbon-document-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M12 24v-6a.945.945 0 0 1 1-1h6a.945.945 0 0 1 1 1v6h-2v4h-4v-4Zm8 4v-2a2.006 2.006 0 0 0 2-2v-6a2.946 2.946 0 0 0-3-3h-6a2.946 2.946 0 0 0-3 3v6a2.006 2.006 0 0 0 2 2v2H8V4h16v24Z"></svg:path>`,
})
export class CarbonDocumentVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
