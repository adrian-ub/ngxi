import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExpandIcon],svg[material-symbols-light-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 21v-1h15v1zm7.5-2.384l-3.308-3.308l.708-.708l2.1 2.089V7.31L9.4 9.4l-.708-.708L12 5.385l3.308 3.307l-.708.708l-2.1-2.089v9.378l2.1-2.089l.708.708zM4.5 4V3h15v1z"></svg:path>`,
})
export class MaterialSymbolsLightExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
