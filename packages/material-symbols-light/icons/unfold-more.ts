import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUnfoldMoreIcon],svg[material-symbols-light-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.27l-3.846-3.847l.719-.72L12 18.832l3.127-3.127l.72.719zM8.873 8.32l-.72-.72L12 3.754L15.846 7.6l-.719.72L12 5.191z"></svg:path>`,
})
export class MaterialSymbolsLightUnfoldMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
