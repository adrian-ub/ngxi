import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHeadsetTwoIcon],svg[icon-park-solid-headset-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M21 16h-6v9a3 3 0 1 0 6 0z"></svg:path><svg:path d="M18 28v10h-6m9-22V4H10.5C8 4 5 6 5 10s3.5 6 6 6zm6 6V10h10.5c2.5 0 5.5 2 5.5 6s-3.5 6-6 6z"></svg:path><svg:path fill="currentColor" d="M33 22h-6v9a3 3 0 1 0 6 0z"></svg:path><svg:path d="M30 34v10h6"></svg:path></svg:g>`,
})
export class IconParkSolidHeadsetTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
