import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEjectOutlineIcon],svg[material-symbols-eject-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19v-2h14v2zm.35-4L12 5l6.65 10zm3.7-2h5.9L12 8.6z"></svg:path>`,
})
export class MaterialSymbolsEjectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
