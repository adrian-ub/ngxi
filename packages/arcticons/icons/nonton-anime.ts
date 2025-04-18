import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNontonAnimeIcon],svg[arcticons-nonton-anime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.455 38.525l-12.66-11.74l-4.3 9.29l-5.85.6l9.51-25.8l16.78 15.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.545 9.475l12.65 11.74l4.31-9.29l5.85-.6l-9.51 25.8l-16.78-15.25"></svg:path>`,
})
export class ArcticonsNontonAnimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
