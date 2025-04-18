import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDirectionsAltOffOutlineSharpIcon],svg[material-symbols-light-directions-alt-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.11 22.53l-5.13-5.134L12 21.377L2.623 12l3.98-3.98l-4.716-4.712l.713-.714l19.223 19.223zm-5.818-5.822l-1.846-1.846L12 16.308l-.708-.708l1.44-1.446L11.08 12.5H7.692v-1h2.387L7.292 8.708L4 12l8 8zm2.808-1.431l-.688-.688L20 12l-8-8l-2.588 2.589l-.689-.689L12 2.623L21.377 12zm-2.63-2.63l.626-.628l-4.307-4.307l-.627.627zm-4.178.06"></svg:path>`,
})
export class MaterialSymbolsLightDirectionsAltOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
