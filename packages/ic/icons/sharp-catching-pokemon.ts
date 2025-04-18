import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCatchingPokemonIcon],svg[ic-sharp-catching-pokemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8"></svg:path>`,
})
export class IcSharpCatchingPokemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
