import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMergeTypeIcon],svg[material-symbols-merge-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.6 20L11 14.4V6.875l-2.6 2.6L6.975 8.05L12 3.025l5 5l-1.425 1.425L13 6.875V13.6l5 5zm-9.2.025l-1.4-1.4l3.175-3.2L10.6 16.85z"></svg:path>`,
})
export class MaterialSymbolsMergeTypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
