import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXclubIcon],svg[arcticons-xclub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 39.314L28.97 25.547h-2.237l4.558 13.766zm-18.242-6.758l-6.507 6.758H7.119M5.5 8.687l13.53 13.766h2.237L16.71 8.687zm11.21 0l13.147 12.766l-.959 1h-7.63"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.498 16.25l5.751-7.563h10.632M24.498 16.25l16.383-7.563l-11.024 12.766m1.433 17.861L18.144 26.547l.959-1h7.63m-2.475 7.009L7.119 39.314l11.024-12.767"></svg:path>`,
})
export class ArcticonsXclubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
