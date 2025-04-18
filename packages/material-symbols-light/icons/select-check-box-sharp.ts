import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSelectCheckBoxSharpIcon],svg[material-symbols-light-select-check-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h15.606l-1 1H5v14h14v-7.361l1-1V20zm7.525-3.712l-4.554-4.553l.708-.708l3.865 3.865l8.79-8.79l.695.683z"></svg:path>`,
})
export class MaterialSymbolsLightSelectCheckBoxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
