import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStrategyIcon],svg[material-symbols-strategy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 22l-6-3.5v-7l3.5-2.05v6.05h5V9.45L20 11.5v7zM5.5 11L2 9V5l3.5-2L9 5v4zm7.5 3V2h9l-2 3l2 3h-7v6z"></svg:path>`,
})
export class MaterialSymbolsStrategyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
