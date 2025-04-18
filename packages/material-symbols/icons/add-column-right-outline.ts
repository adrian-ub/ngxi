import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddColumnRightOutlineIcon],svg[material-symbols-add-column-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h6V5zM2 21V3h18v4h-2V5h-6v14h6v-2h2v4zm8-9h2zm8 3v-2h-2v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsAddColumnRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
