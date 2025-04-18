import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight18UpRatingOutlineSharpIcon],svg[material-symbols-light-18-up-rating-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 14.692h.884V9.308H7.308v.884h1.5zm3 0h3.884V9.308h-3.884zm.884-.769v-1.538h2.116v1.538zm0-2.307v-1.539h2.116v1.539zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLight18UpRatingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
