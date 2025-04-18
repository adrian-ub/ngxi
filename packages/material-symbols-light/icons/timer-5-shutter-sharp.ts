import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer5ShutterSharpIcon],svg[material-symbols-light-timer-5-shutter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.885 18.116v-1.231h6v-4.27h-6v-6.73h7.23v1.23h-6v4.27h6v6.73z"></svg:path>`,
})
export class MaterialSymbolsLightTimer5ShutterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
