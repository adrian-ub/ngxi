import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSourceEnvironmentIcon],svg[material-symbols-light-source-environment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.73 20.154V3.904L7.23.769l4.5 3.135v3.25h9.54v13zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 0h3v-3h-3zm0 12h12.54v-11H7.73zm6.386-7v-1H17.5v1zm0 4v-1H17.5v1zm-3.385-4v-1h1v1zm0 4v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightSourceEnvironmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
