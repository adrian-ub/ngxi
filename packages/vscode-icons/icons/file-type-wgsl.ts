import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeWgslIcon],svg[vscode-icons-file-type-wgsl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#005a9c" fill-rule="evenodd" d="M293.628 508.5L52.873 91.5h481.51z"></svg:path><svg:path fill="#0066b0" fill-rule="evenodd" d="m534.628 91.5l-120.5 208h241z"></svg:path><svg:path fill="#0076cc" fill-rule="evenodd" d="m534.628 507.5l-120.5-208h241z"></svg:path><svg:path fill="#0086e8" fill-rule="evenodd" d="m654.628 300.5l-60.5-104h121z"></svg:path><svg:path fill="#0093ff" fill-rule="evenodd" d="m654.628 92.5l-60.5 104h121z"></svg:path>`,
})
export class VscodeIconsFileTypeWgslIcon {
  readonly viewBox = input("0 0 768 600")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
