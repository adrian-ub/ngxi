import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderReceivedLineIcon],svg[ri-folder-received-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-2 4h3v2h-3v3.5L15 18l5-4.5z"></svg:path>`,
})
export class RiFolderReceivedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
