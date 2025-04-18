import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndIcon],svg[material-symbols-light-line-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 14q-.698 0-1.237-.425t-.698-1.075H2.5v-1h15.066q.159-.65.698-1.075T19.5 10q.84 0 1.42.58t.58 1.419t-.58 1.42T19.5 14"></svg:path>`,
})
export class MaterialSymbolsLightLineEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
