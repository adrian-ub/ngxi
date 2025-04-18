import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBedroomChildSharpIcon],svg[material-symbols-light-bedroom-child-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 16.385H7.5v-1.5h9v1.5h.885V11.15h-1.5V8.23h-7.77v2.92h-1.5zM9 11.115v-2h6v2zM7.5 14v-2h9v2zM3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsLightBedroomChildSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
