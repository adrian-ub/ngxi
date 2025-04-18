import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWeekendSharpIcon],svg[material-symbols-light-weekend-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.615 15.423V9.231h-.384v-1.5h15.538v1.5h-.384v6.192zm-1.23 2.192V9.308h1.384v2.961h14.462V9.308h1.384v8.307z"></svg:path>`,
})
export class MaterialSymbolsLightWeekendSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
