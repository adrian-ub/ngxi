import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKrassesSpielIcon],svg[arcticons-krasses-spiel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.875 5.5v8.077h13.486M18.998 28.853l6.288 10.787H12.71z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="18.998" cy="23.465" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.998" cy="18.076" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.998" cy="12.688" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsKrassesSpielIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
