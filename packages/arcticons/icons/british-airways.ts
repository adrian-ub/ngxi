import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBritishAirwaysIcon],svg[arcticons-british-airways-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.178 22.7c-.911-1.1-.911-2.2-10.022-2.2H4c5.467 3.3 16.4 3.3 33.711 3.3c16.4 0 0 7.7 0 7.7l-6.378-1.1s7.29-2.2 9.111-4.4"></svg:path>`,
})
export class ArcticonsBritishAirwaysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
