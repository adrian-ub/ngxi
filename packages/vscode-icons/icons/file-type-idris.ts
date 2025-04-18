import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeIdrisIcon],svg[vscode-icons-file-type-idris-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8a0819" d="M13.376 6.2c3.6 1.1 4.5 2 5.8 5.2c-.3-4-1.9-5.6-5.8-5.2m-5 6.2c2.3.7 5 1.3 6 5.7c.4-5.5-2.2-5.8-6-5.7m1.6-3.6c3.5.7 5.7 1.7 7 6.2c.3-5.8-2.9-6.4-7-6.2"></svg:path><svg:path fill="#8a0819" d="M14.576 2c19.1 12.4-4.2 12.7.8 27.1l3 .9c-8.3-11.2 18.4-17-3.8-28"></svg:path>`,
})
export class VscodeIconsFileTypeIdrisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
