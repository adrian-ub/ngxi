import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols60fpsSharpIcon],svg[material-symbols-60fps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h8v3H5v2h6v9zm3-3h3v-3H5zm10 0h4V8h-4zm-3 3V5h10v14z"></svg:path>`,
})
export class MaterialSymbols60fpsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
