import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStat3Icon],svg[material-symbols-light-stat-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.4 20.702l-.708-.708L12 14.687l5.308 5.307l-.708.708l-4.6-4.594zm0-6l-.708-.708L12 8.687l5.308 5.307l-.708.708l-4.6-4.594zm0-6l-.708-.708L12 2.687l5.308 5.307l-.708.708L12 4.108z"></svg:path>`,
})
export class MaterialSymbolsLightStat3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
