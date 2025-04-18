import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkywardIcon],svg[arcticons-skyward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.713 32c5.103-6.418 11.598-11.407 24.135-11.407H43.5M9.97 32c6.035-7.005 14.224-13.763 29.174-13.763H43.5M4.5 32c7.392-8.075 16.732-16 33.976-16H43.5"></svg:path>`,
})
export class ArcticonsSkywardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
