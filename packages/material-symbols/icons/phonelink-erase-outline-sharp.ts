import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhonelinkEraseOutlineSharpIcon],svg[material-symbols-phonelink-erase-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 23V1h14v6h-2V6H6v12h10v-1h2v6zm2-3v1h10v-1zM6 4h10V3H6zm0 0V3zm0 16v1zm8.4-4L13 14.6l2.6-2.6L13 9.4L14.4 8l2.6 2.6L19.6 8L21 9.4L18.4 12l2.6 2.6l-1.4 1.4l-2.6-2.6z"></svg:path>`,
})
export class MaterialSymbolsPhonelinkEraseOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
