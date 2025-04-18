import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPolycalIcon],svg[arcticons-polycal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.353 31.024s-1.58 3.335.015 4.001c2.62 1.09 3.498-8.915 2.41-17.433M33.616 30.79s-.16 4.68-4.048 4.154c-4.072-.555-3.58-10.917-2.492-16.848"></svg:path><svg:path d="M12.556 20.728s2.188-3.089 7.792-3.627c5.99-.574 12.987 2.89 13.69.39c.44-1.79-1.58-2.234-3.663-1.054"></svg:path><svg:path d="M10.177 7.857a4 4 0 0 0-4 4v27.646a4 4 0 0 0 4 4h27.646a4 4 0 0 0 4-4V11.857a4 4 0 0 0-4-4zM12.8 10.3V4.5m22.4 5.8V4.5m-16.8 5.8V4.5m5.6 5.8V4.5m5.6 5.8V4.5"></svg:path></svg:g>`,
})
export class ArcticonsPolycalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
