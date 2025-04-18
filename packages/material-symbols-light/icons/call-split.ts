import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallSplitIcon],svg[material-symbols-light-call-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19v-6.792L6 6.708V10H5V5h5v1H6.708l5.792 5.792V19zm2.658-8.439l-.72-.719L17.293 6H14V5h5v5h-1V6.708z"></svg:path>`,
})
export class MaterialSymbolsLightCallSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
