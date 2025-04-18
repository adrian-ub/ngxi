import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilter8SharpIcon],svg[material-symbols-light-filter-8-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1zm8-10l-.5.5v4h5v-4l-.5-.5l.5-.5v-4h-5v4zM15 6.5v3h-3v-3zm0 4v3h-3v-3z"></svg:path>`,
})
export class MaterialSymbolsLightFilter8SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
