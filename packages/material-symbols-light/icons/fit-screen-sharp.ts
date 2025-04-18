import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFitScreenSharpIcon],svg[material-symbols-light-fit-screen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V6h-3V5h4v4zM3 9V5h4v1H4v3zm14 10v-1h3v-3h1v4zM3 19v-4h1v3h3v1zm3.846-3.846V8.846h10.308v6.308z"></svg:path>`,
})
export class MaterialSymbolsLightFitScreenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
