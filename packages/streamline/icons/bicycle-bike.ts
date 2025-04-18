import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBicycleBikeIcon],svg[streamline-bicycle-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 11.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m8.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m-2-.75l-3-5"></svg:path><svg:path d="M4.953 7.088L2.75 11.25L7 10.5l2.85-3.326m1.4 4.076L8.977 4.628h2.64M3 5.5h2.5"></svg:path></svg:g>`,
})
export class StreamlineBicycleBikeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
