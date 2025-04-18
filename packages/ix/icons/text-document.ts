import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextDocumentIcon],svg[ix-text-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 42.667H320l106.666 106.667v128H384V167.04l-81.707-81.706H128v192H85.334zM70.042 342.833v-22.592h103.53v22.592h-37.61V448.37h-28.864V342.833zm186.963 19.18l30.208-41.772h33.002l-46.55 63.126l47.084 65.002h-34.795l-30.379-42.773l-30.23 42.773h-34.068l47.38-65.728l-45.033-62.4h33.557zm82.336-41.772v22.592h37.077V448.37h28.864V342.833h37.59v-22.592z"></svg:path>`,
})
export class IxTextDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
