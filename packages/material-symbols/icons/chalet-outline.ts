import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChaletOutlineIcon],svg[material-symbols-chalet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 11V9.8l-.75.75l-.7-.7L17.5 8.4v-.9h-.9l-1.45 1.45l-.7-.7l.75-.75H14v-1h1.2l-.75-.75l.7-.7L16.6 6.5h.9v-.9l-1.45-1.45l.7-.7l.75.75V3h1v1.2l.75-.75l.7.7L18.5 5.6v.9h.9l1.45-1.45l.7.7l-.75.75H22v1h-1.2l.75.75l-.7.7L19.4 7.5h-.9v.9l1.45 1.45l-.7.7l-.75-.75V11zm-1.4 5.425l-1.1-1.1V20H5v-4.7l-1.1 1.1L2.5 15L10 7.5l7.5 7.5zM7 18h2v-3h2v3h2v-4.675l-3-3l-3 3zm0 0h6z"></svg:path>`,
})
export class MaterialSymbolsChaletOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
