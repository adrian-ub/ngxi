import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAllyIcon],svg[arcticons-ally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.144 42.83A18.764 18.764 0 0 1 5.532 22.94a18.656 18.656 0 0 1 18.78-17.767a18.687 18.687 0 0 1 18.18 18.407"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.856 32.37a7.68 7.68 0 0 1-6.97-8.074a7.61 7.61 0 0 1 7.333-7.695a7.61 7.61 0 0 1 7.334 7.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 23.689v18.756H31.537V24.026m-9.299 18.759l8.31-10.416h-6.7"></svg:path>`,
})
export class ArcticonsAllyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
