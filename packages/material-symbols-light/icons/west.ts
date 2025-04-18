import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWestIcon],svg[material-symbols-light-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.346 18.327L3 11.981l6.346-6.346l.689.688l-5.152 5.158h16.136v1H4.902l5.158 5.158z"></svg:path>`,
})
export class MaterialSymbolsLightWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
