import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnfoldLessDoubleIcon],svg[material-symbols-unfold-less-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 23.95l-1.4-1.4l4.575-4.575L16.6 22.55l-1.4 1.425l-3.175-3.175zm0-5l-1.4-1.4l4.575-4.575L16.6 17.55l-1.4 1.425l-3.175-3.175zM12.025 11l-4.6-4.6L8.85 4.975l3.175 3.175l3.15-3.175L16.6 6.4zm0-5l-4.6-4.6L8.85-.025l3.175 3.175l3.15-3.175L16.6 1.4z"></svg:path>`,
})
export class MaterialSymbolsUnfoldLessDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
