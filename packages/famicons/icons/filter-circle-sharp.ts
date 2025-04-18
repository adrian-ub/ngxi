import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterCircleSharpIcon],svg[famicons-filter-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m48 304h-96v-32h96Zm48-64H160v-32h192Zm32-64H128v-32h256Z"></svg:path>`,
})
export class FamiconsFilterCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
