import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIosSharpIcon],svg[material-symbols-light-ios-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.442 8.73V7.5h1.231v1.23zm.116 7.77v-5.77h1v5.77zm3 0v-9h5v9zm1-1h3v-7h-3zm6 1v-1h4v-3h-4v-5h5v1h-4v3h4v5z"></svg:path>`,
})
export class MaterialSymbolsLightIosSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
