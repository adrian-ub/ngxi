import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAmpErrorIcon],svg[material-symbols-amp-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.275 21L3 15.725v-7.45L8.275 3h7.45L21 8.275v7.45L15.725 21Zm2.075-1.5h.8L17 10.35h-4.2l.85-5.85h-.8l-5.9 9.15h4.2Z"></svg:path>`,
})
export class MaterialSymbolsAmpErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
