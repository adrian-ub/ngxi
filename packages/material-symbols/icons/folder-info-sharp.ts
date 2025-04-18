import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderInfoSharpIcon],svg[material-symbols-folder-info-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h8l2 2h10v6.125q-1-1.05-2.3-1.588T16.975 10q-2.9 0-4.937 2.038T10 16.975q0 .8.175 1.55T10.7 20zm15 2q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m-.5-2h1v-4h-1zm.5-5q.2 0 .35-.15t.15-.35t-.15-.35T17 14t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsFolderInfoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
