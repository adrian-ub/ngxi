import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineAxisIcon],svg[material-symbols-line-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 19L2 17.5L9.5 10l4 4l1.675-1.9l-5.6-5.175L3.5 13L2 11.5L9.5 4l7.1 6.525L20.6 6L22 7.4l-3.95 4.45L22 15.5L20.5 17l-3.85-3.55L13.5 17l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLineAxisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
