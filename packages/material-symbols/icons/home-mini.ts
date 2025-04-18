import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeMiniIcon],svg[material-symbols-home-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5q1.9 0 3.7.463t3.2 1.35T21.15 9t.85 3H2q0-1.7.85-3T5.1 6.813t3.2-1.35T12 5M9 19q-2.35 0-4.187-1.388T2.3 14h19.4q-.675 2.225-2.512 3.613T15 19z"></svg:path>`,
})
export class MaterialSymbolsHomeMiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
