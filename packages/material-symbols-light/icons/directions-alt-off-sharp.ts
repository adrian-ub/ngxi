import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDirectionsAltOffSharpIcon],svg[material-symbols-light-directions-alt-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.11 22.53l-5.13-5.134L12 21.377L2.623 12l3.98-3.98l-4.716-4.712l.713-.714l19.223 19.223zm-8.377-8.376l-1.44 1.446l.707.708l1.446-1.447zm5.367 1.123l-2.63-2.63l.626-.628l-4.307-4.307l-.627.627L8.723 5.9L12 2.623L21.377 12zM7.692 11.5v1h3.387l-1-1z"></svg:path>`,
})
export class MaterialSymbolsLightDirectionsAltOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
