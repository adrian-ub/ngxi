import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSuntimescalendarsIcon],svg[arcticons-suntimescalendars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30 18.45a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.62 20.42V8.78h-4.29V5.5h-3.64v3.28H13.83V5.5h-3.6v3.28H6v30.71h16.07"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.75 36.73H9.26V16.26h24.05v2.64M18 30.67h24.05"></svg:path>`,
})
export class ArcticonsSuntimescalendarsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
