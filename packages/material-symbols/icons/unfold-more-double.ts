import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfoldMoreDoubleIcon],svg[material-symbols-unfold-more-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.025 23.975L7.45 19.4l1.4-1.4l3.175 3.15l3.175-3.175l1.4 1.425zm0-5L7.45 14.4l1.4-1.4l3.175 3.15l3.175-3.175l1.4 1.425zM8.85 11L7.425 9.575l4.6-4.6l4.575 4.6L15.175 11l-3.15-3.175zm0-5L7.425 4.575l4.6-4.6l4.575 4.6L15.175 6l-3.15-3.175z"></svg:path>`,
})
export class MaterialSymbolsUnfoldMoreDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
