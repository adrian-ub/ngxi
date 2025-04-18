import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvGenIcon],svg[material-symbols-light-tv-gen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19.462V18q-.667 0-1.141-.475T3 16.386v-9.77q0-.666.475-1.14T4.615 5h14.77q.666 0 1.14.475T21 6.615v9.77q0 .666-.475 1.14t-1.14.475v1.462h-.5L18.369 18H5.675l-.56 1.462z"></svg:path>`,
})
export class MaterialSymbolsLightTvGenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
