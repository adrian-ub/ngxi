import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSouthWestIcon],svg[material-symbols-light-south-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 18.5v-9h1v7.292l12.1-12.1l.708.708l-12.1 12.1H14.5v1z"></svg:path>`,
})
export class MaterialSymbolsLightSouthWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
