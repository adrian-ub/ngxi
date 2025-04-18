import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMan3SharpIcon],svg[material-symbols-man-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22.25v-7H8v-8h8v8h-2v7zM12 6.5L9.75 4.25L12 2l2.25 2.25z"></svg:path>`,
})
export class MaterialSymbolsMan3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
