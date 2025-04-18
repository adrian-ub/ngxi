import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFileZipIcon],svg[fe-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m9.172 2H6v16h12V6.828h-2.828zM8 4h2v2H8zm2 2h2v2h-2zM8 8h2v2H8zm2 2h2v2h-2zm-1 4l1-1l1 1v4H9z"></svg:path>`,
})
export class FeFileZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
