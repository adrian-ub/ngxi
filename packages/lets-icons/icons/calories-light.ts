import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCaloriesLightIcon],svg[lets-icons-calories-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.5 10c0-.791 1.053-1.001 1.332-.26C16.508 11.53 17 13.134 17 14a5 5 0 0 1-10 0c0-.93.568-2.711 1.322-4.663c.975-2.528 1.463-3.792 2.066-3.86c.192-.022.403.017.575.107c.537.28.537 1.659.537 4.416a1.5 1.5 0 0 0 3 0Z"></svg:path><svg:path d="m11 19l-.263-.657a3.4 3.4 0 0 1 .503-3.393a.973.973 0 0 1 1.52 0c.766.958.958 2.254.503 3.393L13 19"></svg:path></svg:g>`,
})
export class LetsIconsCaloriesLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
