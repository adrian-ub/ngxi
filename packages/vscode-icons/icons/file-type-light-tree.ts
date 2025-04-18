import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightTreeIcon],svg[vscode-icons-file-type-light-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3.021 2.022h1.997v27.955H3.021zM28.98 27.98H5.018v1.997H28.98zm-6.99-8.985H5.019v1.997h16.973zM13.006 9.01H5.018v1.997h7.987z"></svg:path>`,
})
export class VscodeIconsFileTypeLightTreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
