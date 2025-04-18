import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderZipFillIcon],svg[ri-folder-zip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H16v2h2V5zm-3 8h-2v2h-2v3h4zm-2-2h-2v2h2zm2-2h-2v2h2zm-2-2h-2v2h2z"></svg:path>`,
})
export class RiFolderZipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
