import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRimiIcon],svg[arcticons-rimi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.318 7.77c6.53-3.577 12.916-2.85 14.427 1.641c2.688 7.985-4.71 25.292-16.155 33.089c6.256-12.095 6.256-19.439 6.256-24.536s-1.332-7.17-4.528-10.194"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.075 10.71c5.81-3.182 10.693-1.642 12.037 2.353c2.392 7.104-9.983 21.92-23.903 25.588"></svg:path>`,
})
export class ArcticonsRimiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
