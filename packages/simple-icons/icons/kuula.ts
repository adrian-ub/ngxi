import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKuulaIcon],svg[simple-icons-kuula-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.388 0 0 5.388 0 12s5.388 12 12 12s12-5.388 12-12S18.612 0 12 0m0 2.547A9.433 9.433 0 0 1 21.453 12A9.433 9.433 0 0 1 12 21.453A9.433 9.433 0 0 1 2.547 12A9.433 9.433 0 0 1 12 2.547m-.606 5.366l4.372-.693l2.01 3.944l-3.13 3.13l-3.944-2.01z"></svg:path>`,
})
export class SimpleIconsKuulaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
