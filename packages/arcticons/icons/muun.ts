import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuunIcon],svg[arcticons-muun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.632 37.718V12.821s10.984-6.59 18.307 1.464m0 0v23.433m0-23.433c1.345-1.957 4.506-4.003 8.787-4.003c8.202 0 9.906 5.773 9.906 11.313v16.123"></svg:path>`,
})
export class ArcticonsMuunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
