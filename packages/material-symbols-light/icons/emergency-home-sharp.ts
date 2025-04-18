import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEmergencyHomeSharpIcon],svg[material-symbols-light-emergency-home-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 13.173h1v-5.23h-1zm.5 2.23q.262 0 .439-.176q.176-.177.176-.438t-.176-.439t-.439-.177t-.438.177t-.177.439t.177.438t.438.177m0 5.973L2.623 12L12 2.623L21.377 12z"></svg:path>`,
})
export class MaterialSymbolsLightEmergencyHomeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
