import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSailsIcon],svg[vscode-icons-file-type-sails-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#28a3b2" d="M4.6 30S-6.108 12.967 15.925 2v28zm14.737 0V12.645S22.853 18.381 30 30z"></svg:path>`,
})
export class VscodeIconsFileTypeSailsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
