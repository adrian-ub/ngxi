import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasArrowDownIcon],svg[pajamas-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.72 10.159a.75.75 0 1 1 1.06 1.06l-3.25 3.25L8 15l-.53-.53l-3.25-3.25a.75.75 0 0 1 1.06-1.061l1.97 1.97V1.75a.75.75 0 1 1 1.5 0v10.379z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
