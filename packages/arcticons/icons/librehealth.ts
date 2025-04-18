import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibrehealthIcon],svg[arcticons-librehealth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.994 9.46v7.92h-7.92v6.01h7.92v7.922h6.013V23.39h7.92v-6.01h-7.92V9.46Z"></svg:path><svg:path fill="none" stroke="currentColor" d="M40.957 32.167V6.608A2.11 2.11 0 0 0 38.848 4.5H9.151a2.11 2.11 0 0 0-2.108 2.108v25.559a3.65 3.65 0 0 0 1.826 3.162l13.305 7.682a3.65 3.65 0 0 0 3.652 0l13.305-7.682a3.65 3.65 0 0 0 1.826-3.162Z"></svg:path>`,
})
export class ArcticonsLibrehealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
