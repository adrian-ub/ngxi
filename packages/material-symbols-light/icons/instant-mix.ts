import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInstantMixIcon],svg[material-symbols-light-instant-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.346 19.5v-7.115h-2v-1h5v1h-2V19.5zm0-10.885V4.5h1v4.116zm4.154 0v-1h2V4.5h1v3.116h2v1zm2 10.885v-8.115h1V19.5zm6.154 0v-3.116h-2v-1h5v1h-2V19.5zm0-6.884V4.5h1v8.116z"></svg:path>`,
})
export class MaterialSymbolsLightInstantMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
