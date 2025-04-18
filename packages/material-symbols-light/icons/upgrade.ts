import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUpgradeIcon],svg[material-symbols-light-upgrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 19v-1h9v1zm4-3.384V6.883L8.38 9.996l-.688-.688L12 5l4.308 4.308l-.689.688L12.5 6.883v8.733z"></svg:path>`,
})
export class MaterialSymbolsLightUpgradeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
