import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTreeDeciduousIcon],svg[meteor-icons-tree-deciduous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v9m6-3a4 4 0 0 0 1.34-7.77a4 4 0 0 0-3.88-6.19a3.5 3.5 0 1 0-6.92 0a4 4 0 0 0-3.84 6.18A4 4 0 0 0 6 20Z"></svg:path>`,
})
export class MeteorIconsTreeDeciduousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
