import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOwlyIcon],svg[arcticons-owly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 13.592L5.075 8.208L6.337 19.12"></svg:path><svg:ellipse cx="13.921" cy="24.725" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.338" ry="4.348"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.935 32.722A9.438 9.438 0 0 1 6.337 19.12M24 39.792l-5.065-7.07M24 13.592l18.925-5.384l-1.262 10.912"></svg:path><svg:ellipse cx="34.079" cy="24.725" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.338" ry="4.348"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.065 32.722A9.438 9.438 0 0 0 41.663 19.12M24 39.792l5.065-7.07"></svg:path>`,
})
export class ArcticonsOwlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
