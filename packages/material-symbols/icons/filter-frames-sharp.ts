import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterFramesSharpIcon],svg[material-symbols-filter-frames-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V4h6l4-4l4 4h6v18zm2-2h16V6H4zm2-2V8h12v10z"></svg:path>`,
})
export class MaterialSymbolsFilterFramesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
