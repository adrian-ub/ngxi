import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoKeyIcon],svg[fontisto-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.815 14.632l-4.031 4.031H7.115v2.668H4.447v2.668H0v-4.447l9.368-9.368a7.4 7.4 0 0 1-.474-2.632a7.554 7.554 0 1 1 4.869 7.062zm7.532-9.31v-.003a2.668 2.668 0 1 0-2.669 2.668h.001a2.67 2.67 0 0 0 2.668-2.665"></svg:path>`,
})
export class FontistoKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
