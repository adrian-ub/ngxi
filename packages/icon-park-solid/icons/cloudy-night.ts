import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCloudyNightIcon],svg[icon-park-solid-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M9.455 30.994A13.95 13.95 0 0 1 4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486"></svg:path><svg:path fill="currentColor" d="M27.216 30.123a3.82 3.82 0 1 0 4.66 4.661Q32 35.374 32 36a6 6 0 1 1-4.784-5.877Z"></svg:path><svg:path stroke-linecap="round" d="M22.243 15.757a6 6 0 0 0-8.485 8.485"></svg:path></svg:g>`,
})
export class IconParkSolidCloudyNightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
