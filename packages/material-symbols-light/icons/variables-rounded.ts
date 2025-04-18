import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVariablesRoundedIcon],svg[material-symbols-light-variables-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.2V8.8q0-.34.232-.57T4.808 8h14.384q.344 0 .576.23T20 8.8v6.4q0 .34-.232.57t-.576.23H4.808q-.343 0-.576-.23T4 15.2"></svg:path>`,
})
export class MaterialSymbolsLightVariablesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
