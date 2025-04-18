import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHovOutlineIcon],svg[material-symbols-hov-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22L6 12l6-10l6 10zm0-3.9l3.675-6.1L12 5.9L8.325 12zm0-6.1"></svg:path>`,
})
export class MaterialSymbolsHovOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
