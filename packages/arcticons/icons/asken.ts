import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAskenIcon],svg[arcticons-asken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.407 26.358l-4.137-3.751l-5.404 5.404l-8.523-7.727c1.569-5.584 6.11-9.18 14.647-5.924c24.013-9.157 16.405 35.887 0 26.964c-8.663 4.712-14.873-5.626-15.269-15.084"></svg:path><svg:circle cx="30.099" cy="28.846" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.792" cy="31.335" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.99 14.36V5.5m2.264 3.258L30.573 7.6"></svg:path>`,
})
export class ArcticonsAskenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
