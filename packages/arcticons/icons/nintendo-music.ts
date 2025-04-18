import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNintendoMusicIcon],svg[arcticons-nintendo-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="18.946" cy="35.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.666" ry="7.696" transform="rotate(-15.242 18.946 35.65)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.491 34.813V4.5C30.197 14.72 38.6 13.098 38.6 21.745c0 2.286-1.192 4.47-2.945 6.445"></svg:path>`,
})
export class ArcticonsNintendoMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
