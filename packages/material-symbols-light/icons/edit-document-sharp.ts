import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditDocumentSharpIcon],svg[material-symbols-light-edit-document-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h9.5L19 7.5v2.58l-7.73 7.707V21zm8.654 0v-2.21l5.96-5.934l2.19 2.204l-5.94 5.94zm5.96-4.985l.925-.956l-.925-.943l-.95.95zM14 8h4l-4-4l4 4l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLightEditDocumentSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
