import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStartIcon],svg[material-symbols-light-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.5v-11h1v11zm12.712-.212l-.714-.688l4.1-4.1H6.385v-1h12.694l-4.056-4.1l.689-.688L21 12z"></svg:path>`,
})
export class MaterialSymbolsLightStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
