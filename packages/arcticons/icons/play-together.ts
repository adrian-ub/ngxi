import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlayTogetherIcon],svg[arcticons-play-together-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.037 20.943l19.417-6.479a4.688 4.688 0 0 1 6.11 3.777c1.003 6.58.71 17.406-10.455 22.081a24.26 24.26 0 0 1-14.582 1.722"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.963 27.057l-19.417 6.479a4.688 4.688 0 0 1-6.11-3.777c-1.003-6.58-.71-17.406 10.455-22.081a24.26 24.26 0 0 1 14.582-1.722"></svg:path>`,
})
export class ArcticonsPlayTogetherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
