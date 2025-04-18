import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYandexProTaximeterIcon],svg[arcticons-yandex-pro-taximeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.25 38.077a21.5 21.5 0 0 1-.005-28.149M7.74 38.077a21.5 21.5 0 0 0 .005-28.149M9.92 40.257a21.5 21.5 0 0 1 28.15-.005M9.92 7.748a21.5 21.5 0 0 0 28.15.005"></svg:path>`,
})
export class ArcticonsYandexProTaximeterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
