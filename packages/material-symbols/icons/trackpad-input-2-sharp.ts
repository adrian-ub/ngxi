import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrackpadInput2SharpIcon],svg[material-symbols-trackpad-input-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V3h19v6h-2V5H4v12h1.8l1.975 2zm12.825 3q-.6 0-1.15-.225t-.975-.65L7.6 16l1.6-1.65l2.8.825V7h2v7h1V6h2v8h1v-2h2v2h1v-2h2v6q0 1.65-1.175 2.825T19 22z"></svg:path>`,
})
export class MaterialSymbolsTrackpadInput2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
