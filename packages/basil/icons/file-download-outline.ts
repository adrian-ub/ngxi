import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilFileDownloadOutlineIcon],svg[basil-file-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.032 13.164a.75.75 0 0 1 .937 1.172l-2.494 1.995a.75.75 0 0 1-.473.169h-.008a.75.75 0 0 1-.465-.166l-2.497-1.998a.75.75 0 0 1 .937-1.172l1.281 1.026v-3.44a.75.75 0 1 1 1.5 0v3.44z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 2.25A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V8.198a1.75 1.75 0 0 0-.328-1.02L16.408 2.98a1.75 1.75 0 0 0-1.421-.73zM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class BasilFileDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
