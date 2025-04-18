import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePushpinIcon],svg[icomoon-free-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 0L7 1.5L8.5 3L5 7H1.5l2.75 2.75L0 15.385V16h.615l5.635-4.25L9 14.5V11l4-3.5L14.5 9L16 7.5zM7 8.5l-1-1L9.5 4l1 1z"></svg:path>`,
})
export class IcomoonFreePushpinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
