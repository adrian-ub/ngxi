import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrendingFlatIcon],svg[material-symbols-light-trending-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.192 15.808l-.713-.708l2.6-2.6H4v-1h15.079l-2.594-2.6l.713-.708L21 12z"></svg:path>`,
})
export class MaterialSymbolsLightTrendingFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
