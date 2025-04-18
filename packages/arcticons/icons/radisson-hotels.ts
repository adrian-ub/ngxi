import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRadissonHotelsIcon],svg[arcticons-radisson-hotels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.504 33.075V16.607h7.217c3.048 0 5.519 2.476 5.519 5.53s-2.47 5.531-5.519 5.531H9.504m7.217 0l5.391 5.403m3.534-16.464v16.468m12.858-16.468v16.468M25.646 24.81h12.858"></svg:path>`,
})
export class ArcticonsRadissonHotelsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
