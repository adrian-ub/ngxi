import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastfoodIcon],svg[material-symbols-fastfood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15q0-2.725 2.275-4.362T8.5 9t5.225 1.638T16 15zm0 4v-2h15v2zm1 4q-.425 0-.712-.288T1 22v-1h15v1q0 .425-.288.713T15 23zm16 0v-8q0-2.85-1.95-4.925T11.275 7.3L11 5h5V1h2v4h5l-1.625 16.2q-.075.775-.638 1.288T19.4 23z"></svg:path>`,
})
export class MaterialSymbolsFastfoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
