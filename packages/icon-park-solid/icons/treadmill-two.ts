import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreadmillTwoIcon],svg[icon-park-solid-treadmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 39v5m32-5v5m-4-13l6-16l-4-6m-5 5L43 4"></svg:path><svg:rect width="40" height="8" x="4" y="31" fill="currentColor" rx="4"></svg:rect></svg:g>`,
})
export class IconParkSolidTreadmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
