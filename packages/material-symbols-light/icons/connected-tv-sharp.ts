import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightConnectedTvSharpIcon],svg[material-symbols-light-connected-tv-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.308 15.692h1.384q-.096-.536-.472-.912t-.912-.472zm3.55 0h.873q0-1.844-1.294-3.133q-1.294-1.29-3.13-1.29v.873q1.476 0 2.513 1.038t1.038 2.512m3.038 0h.873q0-1.534-.583-2.9q-.583-1.364-1.597-2.38T8.211 8.815t-2.903-.583v.873q2.744 0 4.666 1.924t1.922 4.664M9 20v-2H3V4h18v14h-6v2z"></svg:path>`,
})
export class MaterialSymbolsLightConnectedTvSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
