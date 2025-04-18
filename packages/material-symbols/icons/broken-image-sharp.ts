import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrokenImageSharpIcon],svg[material-symbols-broken-image-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-8.6l3 3l4-4l4 4l4-4l3 3V21zM3 3h18v8.575l-3-3l-4 4l-4-4l-4 4l-3-3z"></svg:path>`,
})
export class MaterialSymbolsBrokenImageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
