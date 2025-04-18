import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEnrecipesIcon],svg[arcticons-enrecipes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.752 40.645v-6.177a2.13 2.13 0 0 1 .638-1.526c.96-.943 2.891-2.848 4.988-4.971l-.009-.005a9.947 9.947 0 0 0-5.072-17.038a3.4 3.4 0 0 1-2.188-1.387a9.948 9.948 0 0 0-16.218 0a3.4 3.4 0 0 1-2.188 1.387A9.947 9.947 0 0 0 8.63 27.966l-.01.005a474 474 0 0 0 4.989 4.972a2.13 2.13 0 0 1 .638 1.525v6.177a2 2 0 0 0 2 2h15.504a2 2 0 0 0 2-2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.281 42.645V21.242A4.28 4.28 0 0 0 24 16.962h0a4.28 4.28 0 0 0-4.281 4.28v21.403"></svg:path>`,
})
export class ArcticonsEnrecipesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
