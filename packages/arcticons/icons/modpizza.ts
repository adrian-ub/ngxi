import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsModpizzaIcon],svg[arcticons-modpizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.68 19.4a3.15 3.15 0 0 0-3.31-3.14a3.27 3.27 0 0 0-3 3.32v2.91a3.15 3.15 0 0 0 3.15 3.14h0a3.15 3.15 0 0 0 3.14-3.14V19.4m-17.82 6.23v-9.37l4.67 9.38l4.68-9.37v9.37m10.69-.01v-9.39h1.59a4.69 4.69 0 0 1 4.69 4.7h0a4.69 4.69 0 0 1-4.69 4.69Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.2 4.86L6.69 11.25V27C6.69 35.44 24 43.5 24 43.5S41.31 35.44 41.31 27V11.25L25.8 4.86a4.68 4.68 0 0 0-3.6 0"></svg:path>`,
})
export class ArcticonsModpizzaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
