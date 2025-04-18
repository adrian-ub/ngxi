import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightValveIcon],svg[material-symbols-light-valve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 7.616v-3h-4v-1h9v1h-4v3zm-7 12.769v-7h1v1h4v-4h-1v-1h7v1h-1v4h4v-1h1v7h-1v-1h-13v1z"></svg:path>`,
})
export class MaterialSymbolsLightValveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
