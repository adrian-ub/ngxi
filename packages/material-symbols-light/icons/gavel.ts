import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGavelIcon],svg[material-symbols-light-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.116 20.5v-1h11v1zm5.957-5.466l-4.958-4.957l1.408-1.458l5.008 4.958zm5.504-5.503l-4.958-5.008l1.458-1.407l4.958 4.957zm5.023 9.777L8.242 6.95l.708-.708L21.308 18.6z"></svg:path>`,
})
export class MaterialSymbolsLightGavelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
