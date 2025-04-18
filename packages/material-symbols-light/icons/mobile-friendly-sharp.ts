import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileFriendlySharpIcon],svg[material-symbols-light-mobile-friendly-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22V2h12v4.923h-1V5.5H6v13h10v-1.423h1V22zm9.95-6.692l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707z"></svg:path>`,
})
export class MaterialSymbolsLightMobileFriendlySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
