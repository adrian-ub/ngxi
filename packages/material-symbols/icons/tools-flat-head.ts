import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsToolsFlatHeadIcon],svg[material-symbols-tools-flat-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h8v2zm0-3l-1-7l2-8h6l2 8l-1 7zm1.3-8h5.4l-1.25-5h-2.9z"></svg:path>`,
})
export class MaterialSymbolsToolsFlatHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
