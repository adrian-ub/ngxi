import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCoffeeMakerOutlineSharpIcon],svg[material-symbols-light-coffee-maker-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h14v1h-2.5v1.923h-8V4H6v16h4.512q-.893-.54-1.452-1.395q-.56-.855-.56-2.067v-4h8v4q0 1.212-.56 2.067q-.56.854-1.451 1.395H19v1zm7.5-1.461q1.25 0 2.125-.876t.875-2.125v-3h-6v3q0 1.25.875 2.125t2.125.875m0-9.538q.31 0 .54-.23t.23-.54t-.23-.539t-.54-.23t-.54.23t-.23.54t.23.54t.54.229m0 3.539"></svg:path>`,
})
export class MaterialSymbolsLightCoffeeMakerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
