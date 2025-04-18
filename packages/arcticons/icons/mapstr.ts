import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMapstrIcon],svg[arcticons-mapstr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.93 20.51h11.491m-10.748-5.435H30.07M26.273 23.4l1.216-11.241m-6.745 11.24l1.216-11.24M24 4.5c-7.23 0-13.091 5.86-13.091 13.091c0 10.251 10 22.612 12.611 25.632a.8.8 0 0 0 1.21 0c2.55-3 12.361-15.381 12.361-25.632c0-7.23-5.86-13.091-13.09-13.091"></svg:path>`,
})
export class ArcticonsMapstrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
