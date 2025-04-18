import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStat2Icon],svg[material-symbols-light-stat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 17.708L6.692 17L12 11.692L17.308 17l-.708.708l-4.6-4.594zm0-6L6.692 11L12 5.692L17.308 11l-.708.708L12 7.114z"></svg:path>`,
})
export class MaterialSymbolsLightStat2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
