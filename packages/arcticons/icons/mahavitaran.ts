import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMahavitaranIcon],svg[arcticons-mahavitaran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 14.665l-8.511 9.846l3.759.898l-7.068 7.926H4.5l7.435-7.64l-3.677-.612zm0 0l8.511 9.846l-3.759.898l7.068 7.926h7.68l-7.435-7.64l3.677-.612z"></svg:path>`,
})
export class ArcticonsMahavitaranIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
