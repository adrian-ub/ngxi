import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStorygraphIcon],svg[arcticons-storygraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="7.603" height="29.842" x="5.5" y="6.617" rx="1" ry="1"></svg:rect><svg:rect width="7.603" height="29.842" x="16.564" y="6.617" rx="1" ry="1"></svg:rect><svg:rect width="7.603" height="29.842" x="30.911" y="6.343" rx="1" ry="1" transform="rotate(-16.906 34.712 21.264)"></svg:rect><svg:rect width="37" height="2.828" x="5.5" y="39.043" rx="1" ry="1"></svg:rect></svg:g>`,
})
export class ArcticonsStorygraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
