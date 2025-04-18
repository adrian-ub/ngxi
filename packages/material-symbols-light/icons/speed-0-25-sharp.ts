import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed025SharpIcon],svg[material-symbols-light-speed-0-25-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.5v-1h1v1zm9 0v-1h4v-3h-4v-5h5v1h-4v3h4v5zm-6.5 0v-5h4v-3h-4v-1h5v5h-4v3h4v1z"></svg:path>`,
})
export class MaterialSymbolsLightSpeed025SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
