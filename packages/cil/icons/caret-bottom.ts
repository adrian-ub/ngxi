import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCaretBottomIcon],svg[cil-caret-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.286 408.357L16.333 138.548V104H496v36.45ZM56.892 136l199.466 224.287L457.042 136Z"></svg:path>`,
})
export class CilCaretBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
