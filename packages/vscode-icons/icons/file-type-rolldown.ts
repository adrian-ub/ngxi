import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeRolldownIcon],svg[vscode-icons-file-type-rolldown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="vscodeIconsFileTypeRolldown0" x1="115" x2="115" y2="249" gradientUnits="userSpaceOnUse"><svg:stop offset=".313" stop-color="#F0DB4F"></svg:stop><svg:stop offset="1" stop-color="#FF5B12"></svg:stop></svg:lineargradient><svg:lineargradient id="vscodeIconsFileTypeRolldown1" x1="115" x2="115" y2="249" gradientUnits="userSpaceOnUse" href="#vscodeIconsFileTypeRolldown0"></svg:lineargradient></svg:defs><svg:path fill="url(#vscodeIconsFileTypeRolldown1)" d="M215.09 84.955h-79.774l12.296-16.65l-88.14-.202l-43.057 59.677h83.676l-36.958 55.79H-.002L76.665 249l153.33-65.43h-75.879zM198.06 0h-89.445L96.331 17.026h89.156zM173.7 32.987H84.816L71.348 51.654h88.568z" transform="matrix(.12174 0 0 .11245 2 2)"></svg:path>`,
})
export class VscodeIconsFileTypeRolldownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
