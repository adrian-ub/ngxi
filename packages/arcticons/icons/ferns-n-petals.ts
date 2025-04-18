import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFernsNPetalsIcon],svg[arcticons-ferns-n-petals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.28 28.458v-5.551a3.364 3.364 0 0 0-3.365-3.365h0a3.364 3.364 0 0 0-3.364 3.364m0 5.552v-8.916m10.077 5.552a3.364 3.364 0 0 0 3.365 3.364h0a3.364 3.364 0 0 0 3.364-3.364v-2.187a3.364 3.364 0 0 0-3.364-3.365h0a3.364 3.364 0 0 0-3.365 3.365m0-3.365V33m-15.991-4.542V17.355c0-1.3 1.055-2.355 2.355-2.355h0c1.16 0 1.883.343 2.38.985m-6.729 3.557h4.71"></svg:path>`,
})
export class ArcticonsFernsNPetalsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
