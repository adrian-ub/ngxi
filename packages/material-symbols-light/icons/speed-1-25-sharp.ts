import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed125SharpIcon],svg[material-symbols-light-speed-1-25-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.039 16.5v-1h1v1zm9.461 0v-1h4v-3h-4v-5h5v1h-4v3h4v5zm-6.73 0v-5h4v-3h-4v-1h5v5h-4v3h4v1zm-5.462 0v-8H2.5v-1h2.808v9z"></svg:path>`,
})
export class MaterialSymbolsLightSpeed125SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
