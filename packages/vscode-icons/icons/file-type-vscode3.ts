import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeVscode3Icon],svg[vscode-icons-file-type-vscode3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007acc" d="M29.821 4.321L24.023 2l-12.53 12.212l-7.66-5.827l-1.654.837V22.8l1.644.827l7.65-5.827L24.023 30l5.8-2.321V4.321ZM4.65 19.192v-6.374l3.55 3.167zM16 15.985l7.082-5.3v10.639l-7.092-5.339z"></svg:path>`,
})
export class VscodeIconsFileTypeVscode3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
