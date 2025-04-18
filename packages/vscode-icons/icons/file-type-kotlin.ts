import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeKotlinIcon],svg[vscode-icons-file-type-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeKotlin0" x1="311.336" x2="283.342" y1="1452.064" y2="1480.058" gradientTransform="translate(-281.4 -1450)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#e44857"></svg:stop><svg:stop offset=".47" stop-color="#9d4b9d"></svg:stop><svg:stop offset="1" stop-color="#6d5faa"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeKotlin0)" d="M30 30H2V2h28L16 16Z"></svg:path>`,
})
export class VscodeIconsFileTypeKotlinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
