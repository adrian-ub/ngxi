import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPinchZoomOutSharpIcon],svg[material-symbols-pinch-zoom-out-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12V7h1.5v2.45l2.975-2.975l1.05 1.05L3.55 10.5H6V12zm6.525-5.475l-1.05-1.05L9.45 2.5H7V1h5v5h-1.5V3.55zM13.575 23L7.6 17l1.575-1.625l2.825.8V7h2v8h1v-4h2v4h1v-3h2v3h1v-1h2v9z"></svg:path>`,
})
export class MaterialSymbolsPinchZoomOutSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
