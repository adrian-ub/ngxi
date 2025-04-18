import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeJscpdIcon],svg[vscode-icons-file-type-jscpd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#666" d="m8.845 8.462l3.181-5.778L10.867 2L7.923 7.349L4.704 2.062l-1.128.737l3.449 5.663H2V30h28V8.462z"></svg:path><svg:path fill="#f0f0f0" d="M3.6 10.119h24.8v18.225H3.6z"></svg:path><svg:path fill="#007bff" d="M5.731 12.88h10.4v1.105h-10.4z"></svg:path><svg:path fill="#b200b2" d="M8.931 15.641h15.733v1.105H8.931z"></svg:path><svg:path fill="#ffaa56" d="M9.731 18.955h12.267v1.105H9.731z"></svg:path><svg:path fill="#b2b2b2" d="M6.798 22.268h12.267v1.105H6.798z"></svg:path><svg:path fill="#0d0" d="M6.265 25.582h17.067v1.105H6.265z"></svg:path>`,
})
export class VscodeIconsFileTypeJscpdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
