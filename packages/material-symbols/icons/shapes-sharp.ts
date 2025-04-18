import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShapesSharpIcon],svg[material-symbols-shapes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16q-2.925 0-4.962-2.037T2 9t2.038-4.962T9 2t4.963 2.038T16 9t-2.037 4.963T9 16m-1 6v-4.05q.25.025.5.038T9 18q3.75 0 6.375-2.625T18 9q0-.25-.012-.5T17.95 8H22v14z"></svg:path>`,
})
export class MaterialSymbolsShapesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
