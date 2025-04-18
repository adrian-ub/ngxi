import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsRexxIcon],svg[file-icons-rexx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512V0h188.137l141.037 200.838L201 287l152 225H242.445L127 346V235l78.887-51.734L127 78H88v434z"></svg:path>`,
})
export class FileIconsRexxIcon {
  readonly viewBox = input("0 0 353 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
