import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlayingCardsOutlineSharpIcon],svg[material-symbols-light-playing-cards-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.93 14.03l.862-3.13l-2.684-1.854l-.862 3.131zM4.617 19.288l-2.287-1.04l2.284-4.879zM7 20.769v-6.73l2.439 6.73zm4.846-.405L6.675 6.165l9.44-3.433l5.19 14.179zm.604-1.326l7.55-2.75l-4.456-12.25L8 6.788zm1.55-7.5"></svg:path>`,
})
export class MaterialSymbolsLightPlayingCardsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
