import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHallwaySharpIcon],svg[material-symbols-hallway-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V4h5l4-4l4 4h5v18zm3-4h12l-3.75-5l-3 4L9 14zm4.1-14h3.8L12 2.1z"></svg:path>`,
})
export class MaterialSymbolsHallwaySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
