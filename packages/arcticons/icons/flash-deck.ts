import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlashDeckIcon],svg[arcticons-flash-deck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.278 4.5h20.37v33.926h-20.37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.648 7.037h2.537v33.926h-20.37v-2.537"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.185 9.574h2.537V43.5h-20.37v-2.537"></svg:path><svg:circle cx="21.463" cy="32.405" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.463 24.405v5.95"></svg:path><svg:circle cx="21.463" cy="17.213" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.263 11.414a2.2 2.2 0 1 1 4.4 0a1.97 1.97 0 0 1-.645 1.555c-.455.365-1.563.964-1.563 1.895"></svg:path>`,
})
export class ArcticonsFlashDeckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
