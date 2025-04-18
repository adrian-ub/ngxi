import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExpandLessIcon],svg[material-symbols-light-expand-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.4 14.702l-.708-.708L12 8.687l5.308 5.307l-.708.708l-4.6-4.6z"></svg:path>`,
})
export class MaterialSymbolsLightExpandLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
