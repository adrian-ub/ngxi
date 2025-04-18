import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDrLydIcon],svg[arcticons-dr-lyd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 6.904h4.055v25.579H5.5zm6.589 16.503h4.055v9.077h-4.055zm6.589-7.53h4.055v14.595h-4.055zm6.589 0h4.055v25.218h-4.055zm6.589 4.281h4.055v14.595h-4.055zm6.589-10.521H42.5v25.115h-4.055z"></svg:path>`,
})
export class ArcticonsDrLydIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
