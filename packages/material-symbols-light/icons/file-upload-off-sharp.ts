import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileUploadOffSharpIcon],svg[material-symbols-light-file-upload-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5l3.539 3.539l-.708.719L12.5 6.927v2.762l-1-1V6.996l-1.02 1.02l-.747-.749zm-.5 10.577V11.5l1 1v3.077zm8.333 5.683L17.573 19H5v-4.038h1V18h10.573L2.741 4.167l.713-.713l17.092 17.092zM19 16.535l-1-1v-.573h1z"></svg:path>`,
})
export class MaterialSymbolsLightFileUploadOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
