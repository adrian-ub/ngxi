import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsFileArchiveIcon],svg[bxs-file-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6h-3v2H9v2h2v2H9v2h2v8H7v-6h2v-2H7V8h2V6H7V4h2V2zm7 2l5 5h-5z"></svg:path><svg:path fill="currentColor" d="M8 15h2v2H8z"></svg:path>`,
})
export class BxsFileArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
