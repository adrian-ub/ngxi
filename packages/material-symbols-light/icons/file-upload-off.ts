import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileUploadOffIcon],svg[material-symbols-light-file-upload-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5l3.539 3.539l-.708.719L12.5 6.927v2.762l-1-1V6.996l-1.02 1.02l-.747-.749zm-.5 10.577V11.5l1 1v3.077zm8.333 5.683L17.573 19H6.615q-.69 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h9.958L2.741 4.167l.713-.713l17.092 17.092zM19 16.535l-1-1v-.573h1z"></svg:path>`,
})
export class MaterialSymbolsLightFileUploadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
