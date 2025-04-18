import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed05SharpIcon],svg[material-symbols-light-speed-0-5-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 16.5v-1h1v1zm2.5 0v-1h4v-3h-4v-5h5v1h-4v3h4v5z"></svg:path>`,
})
export class MaterialSymbolsLightSpeed05SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
