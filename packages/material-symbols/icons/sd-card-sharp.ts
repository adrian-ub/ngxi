import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSdCardSharpIcon],svg[material-symbols-sd-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V8l6-6h10v20zm5-11h2V7H9zm3 0h2V7h-2zm3 0h2V7h-2z"></svg:path>`,
})
export class MaterialSymbolsSdCardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
