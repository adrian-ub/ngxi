import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrosswordHebrewIcon],svg[arcticons-crossword-hebrew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5v37M42.5 24h-37m4.925-13.603l1.185 8.827h2.134a4.74 4.74 0 0 0 4.697-4.109l.633-4.718"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.189 16.084h.628a2.37 2.37 0 0 0 2.32-1.886l.792-3.801m21.698 8.766v-6.457a2.37 2.37 0 0 0-2.37-2.37h-2.259c-.466 0-1.325.041-1.888.306"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.414 10.358v7.265c0 .85-.69 1.54-1.54 1.54m6.22 18.5v-6.457a2.37 2.37 0 0 0-2.37-2.37h-1.43c-.465 0-1.324.041-1.887.306v8.522M14.75 38.937V32.48l-2.37-4.917m2.37 4.917a2.37 2.37 0 0 0 2.37-2.37v-2.547"></svg:path>`,
})
export class ArcticonsCrosswordHebrewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
