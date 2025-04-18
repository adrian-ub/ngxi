import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLogIcon],svg[vscode-icons-file-type-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bd02" d="M29.4 27.6H2.5V4.5h26.9Zm-25.9-1h24.9V5.5H3.5Z"></svg:path><svg:path fill="#00bd02" d="M2.5 5.5h26.9v1.9H2.5zm8.833 4H19.5v1h-8.167zm0 2.583h12.5v1h-12.5zm0 2.667H21.95v1H11.333zm0 2.833H25.5v1H11.333zm0 2.917h9.834v1h-9.834zm.167 2.583h12.167v1H11.5zM5.5 9.5h4.333v1H5.5zm0 2.583h4.333v1H5.5z"></svg:path><svg:path fill="#00bd02" d="M5.5 12.083h4.333v1H5.5zm0 2.584h4.333v1H5.5zm0 2.583h4.333v1H5.5zm0 3.25h4.333v1H5.5zm0 2.583h4.333v1H5.5z"></svg:path>`,
})
export class VscodeIconsFileTypeLogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
