import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiomartIcon],svg[arcticons-jiomart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.79 15.202s1.223-9.99-7.943-9.99s-7.943 9.99-7.943 9.99l-4.036.001s-3.758.243-3.598 4.56L9.71 37.83s.799 4.877 4.876 4.957H24l9.413.001c4.078-.08 4.877-4.957 4.877-4.957l1.44-18.069c.16-4.317-3.598-4.556-3.598-4.556zm-15.886 0H31.79"></svg:path>`,
})
export class ArcticonsJiomartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
