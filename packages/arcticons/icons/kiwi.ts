import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKiwiIcon],svg[arcticons-kiwi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.85 15.47s-4.957-8.336-17.726-8.31C11.354 7.187 3.85 15.128 3.85 24s7.641 16.791 20.274 16.84s17.726-8.31 17.726-8.31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.049 17.658v12.684m9.619-12.554l-6.085 6.085l6.368 6.367"></svg:path><svg:circle cx="42.1" cy="24" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsKiwiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
