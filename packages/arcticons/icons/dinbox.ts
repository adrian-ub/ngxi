import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDinboxIcon],svg[arcticons-dinbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 11.6v29.9c0 1.1-.9 2-2 2h-27c-1.1 0-2-.9-2-2V11.6L24 4.5z"></svg:path><svg:circle cx="24" cy="16.7" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 22.6h10.2m3.8-3.8l-3.8 3.8"></svg:path><svg:circle cx="18" cy="36.4" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 30.6h10.2m3.8 3.8l-3.8-3.8"></svg:path><svg:circle cx="29.7" cy="26.7" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.4 26.7h21.7"></svg:path>`,
})
export class ArcticonsDinboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
