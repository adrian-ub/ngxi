import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeckIcon],svg[arcticons-deck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.36 21.28h31.28a2.85 2.85 0 0 1 2.86 2.86v15.52a2.86 2.86 0 0 1-2.86 2.86H8.36a2.86 2.86 0 0 1-2.86-2.86V24.14a2.85 2.85 0 0 1 2.86-2.86"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.64 21.28V17a1 1 0 0 0-1-1H9.36a1 1 0 0 0-1 1v4.27M37.38 16v-4.25a1 1 0 0 0-1-1H11.62a1 1 0 0 0-1 1V16m24.13-5.25V6.48a1 1 0 0 0-1-1h-19.5a1 1 0 0 0-1 1v4.27"></svg:path>`,
})
export class ArcticonsDeckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
