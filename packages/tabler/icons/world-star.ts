import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWorldStarIcon],svg[tabler-world-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-9.968 8.948M3.6 9h16.8M3.6 15H10"></svg:path><svg:path d="M11.5 3a17 17 0 0 0-1.886 13.802M12.5 3a17 17 0 0 1 2.549 8.01m2.751 9.807l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411z"></svg:path></svg:g>`,
})
export class TablerWorldStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
