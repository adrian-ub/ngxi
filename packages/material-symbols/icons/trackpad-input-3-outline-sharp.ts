import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrackpadInput3OutlineSharpIcon],svg[material-symbols-trackpad-input-3-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22h-5.425L7.6 16l1.6-1.65l2.8.825V7h2v10.825l-2.45-.7l2.575 2.575q.15.15.325.225t.375.075H19q.825 0 1.413-.587T21 18v-5h2v5q0 1.65-1.175 2.825T19 22m-4-7V6h2v9zm3 0V8h2v7zm1 5h-4.875zM2 19V3h19v2H4v12h1.8l1.975 2z"></svg:path>`,
})
export class MaterialSymbolsTrackpadInput3OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
