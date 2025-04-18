import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSanmerPkgInstIcon],svg[arcticons-sanmer-pkg-inst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.437 39.718V10.435h-4.62a2.316 2.316 0 1 1-.001-4.632h32.368a2.316 2.316 0 1 1 0 4.632q0 0 0 0h-4.632v29.283a2.316 2.316 0 1 1-4.621 0l.332-29.283H17.058v29.283a2.316 2.316 0 1 1-4.621 0"></svg:path>`,
})
export class ArcticonsSanmerPkgInstIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
