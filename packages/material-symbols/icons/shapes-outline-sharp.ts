import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShapesOutlineSharpIcon],svg[material-symbols-shapes-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17.95q.25.025.488.038T9 18t.513-.012t.487-.038V20h10V10h-2.05q.025-.25.038-.488T18 9t-.012-.513T17.95 8H22v14H8zM9 16q-2.925 0-4.962-2.037T2 9t2.038-4.962T9 2t4.963 2.038T16 9t-2.037 4.963T9 16m0-2q2.075 0 3.538-1.463T14 9t-1.463-3.537T9 4T5.463 5.463T4 9t1.463 3.538T9 14m0-5"></svg:path>`,
})
export class MaterialSymbolsShapesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
