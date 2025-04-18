import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSanIcon],svg[vscode-icons-file-type-san-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#295892" d="M30 17.832L2 23.28V30l28-5.447Zm0-10.579L2 12.7v6.72l28-5.447Z"></svg:path><svg:path fill="#a1e0ff" d="M30 13.992L2 8.721V2l28 5.271Zm0 10.579L2 19.3v-6.72l28 5.27Z"></svg:path>`,
})
export class VscodeIconsFileTypeSanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
