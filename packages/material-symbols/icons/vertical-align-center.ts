import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVerticalAlignCenterIcon],svg[material-symbols-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-4.2l-1.6 1.6L8 18l4-4l4 4l-1.4 1.4l-1.6-1.6V22zm-7-9v-2h16v2zm8-3L8 6l1.4-1.4L11 6.2V2h2v4.2l1.6-1.6L16 6z"></svg:path>`,
})
export class MaterialSymbolsVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
