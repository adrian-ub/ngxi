import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrackpadInput3SharpIcon],svg[material-symbols-trackpad-input-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.575 22L7.6 16l1.6-1.65l2.8.825V7h2v7h1V6h2v8h1V8h2v6h1v-1h2v5q0 1.65-1.175 2.825T19 22zM2 19V3h19v2H4v12h1.8l1.975 2z"></svg:path>`,
})
export class MaterialSymbolsTrackpadInput3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
