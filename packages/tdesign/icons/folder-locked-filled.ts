import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderLockedFilledIcon],svg[tdesign-folder-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5h8.48l2 2.5H23v5.522A6.5 6.5 0 0 0 13 16v5H1z"></svg:path><svg:path fill="currentColor" d="M22.75 14.75v.75h1.249V22h-9v-6.5h1.251v-.75a3.25 3.25 0 0 1 6.5 0m-2 0a1.25 1.25 0 1 0-2.5 0v.75h2.5z"></svg:path>`,
})
export class TdesignFolderLockedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
