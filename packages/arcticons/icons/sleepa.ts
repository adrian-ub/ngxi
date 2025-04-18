import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSleepaIcon],svg[arcticons-sleepa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.18 34.32A21.493 21.493 0 0 1 15.454 4.275a21.498 21.498 0 1 0 28.271 28.27a21.4 21.4 0 0 1-8.545 1.775"></svg:path>`,
})
export class ArcticonsSleepaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
