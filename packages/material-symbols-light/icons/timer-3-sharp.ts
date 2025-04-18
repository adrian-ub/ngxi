import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer3SharpIcon],svg[material-symbols-light-timer-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.885 18.116v-1.231h6v-4.27h-5v-1.23h5v-4.27h-6v-1.23h7.23v5.5L15.5 12l.616.616v5.5z"></svg:path>`,
})
export class MaterialSymbolsLightTimer3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
