import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLectio365Icon],svg[arcticons-lectio-365-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.834 24H3.672m2.344 4.87v3.88a4 4 0 0 0 2 3.465l15.156 8.75a4 4 0 0 0 4 0l15.156-8.75a4 4 0 0 0 2-3.465v-17.5a4 4 0 0 0-2-3.465l-15.156-8.75a4 4 0 0 0-4 0h0l-15.156 8.75a4 4 0 0 0-2 3.465v3.88"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.172 16.338L32.835 24l-7.663 7.663"></svg:path>`,
})
export class ArcticonsLectio365Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
