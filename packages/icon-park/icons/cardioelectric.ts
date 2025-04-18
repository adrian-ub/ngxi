import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCardioelectricIcon],svg[icon-park-cardioelectric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5.55469 23.194C5.3698 22.8031 5.19795 22.4068 5.04108 22.0056C4.39264 20.3473 4 18.6042 4 16.8C4 10.8353 8.88417 6 14.9091 6C18.7036 6 22.0456 7.91792 24 10.828C25.9544 7.91792 29.2964 6 33.0909 6C39.1158 6 44 10.8353 44 16.8C44 24.5647 36.7273 31.2 33.0909 34.8C30.6667 37.2 27.6364 39.6 24 42C20.3636 39.6 17.3333 37.2 14.9091 34.8C14.543 34.4376 14.1401 34.0444 13.7114 33.6224"></svg:path><svg:path d="M8 29.9734L19.1138 19.0396L25.5781 25.7059L35.2619 15.8188"></svg:path></svg:g>`,
})
export class IconParkCardioelectricIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
