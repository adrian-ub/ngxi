import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPinchZoomOutSharpIcon],svg[material-symbols-light-pinch-zoom-out-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.616 12V7.616H2.5v2.873l3.264-3.264l.627.627l-3.264 3.264H6V12zm6.236-5.61l-.627-.626L10.489 2.5H7.616v-.884H12V6h-.885V3.127zm5.185 15.38l-5.668-5.654l.922-.895l3.44.858v-8.81h1v7.77h1.827v-4.27h1v4.27h1.846v-3.27h1v3.27h1.827v-1.27h1v8z"></svg:path>`,
})
export class MaterialSymbolsLightPinchZoomOutSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
