import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestWakeOnPressSharpIcon],svg[material-symbols-nest-wake-on-press-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13V4h3v9zM7.1 21L2 15.625L3.2 14.4l3.8.85V4.5q0-.625.438-1.062T8.5 3t1.063.438T10 4.5v6h1.4l5.775 2.9L16.1 21z"></svg:path>`,
})
export class MaterialSymbolsNestWakeOnPressSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
