import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotTabletIcon],svg[material-symbols-light-screenshot-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19q-.667 0-1.141-.475T2 17.386V6.615q0-.666.475-1.14T3.614 5h16.77q.666 0 1.14.475T22 6.615v10.77q0 .666-.475 1.14t-1.14.475zM5.5 18h13V6h-13zm8.423-1.384h3.193v-3.193h-.885v2.308h-2.308zm-7.038-6.039h.884V8.269h2.308v-.885H6.884z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
