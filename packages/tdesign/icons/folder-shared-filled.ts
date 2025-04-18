import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderSharedFilledIcon],svg[tdesign-folder-shared-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.48 2.5H1V21h22V5H11.48zm5.02 9c0 .74-.322 1.405-.833 1.863A4 4 0 0 1 16 17v1H8v-1a4 4 0 0 1 2.333-3.637A2.5 2.5 0 1 1 14.5 11.5"></svg:path>`,
})
export class TdesignFolderSharedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
