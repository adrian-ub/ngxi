import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRemoteControlFillIcon],svg[ri-remote-control-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a1 1 0 0 1 1 1v9H6v-9a1 1 0 0 1 1-1zm-7 2H8v2h2zm2-8a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.156 0l-1.79-.895A6 6 0 0 1 12 6m0-4a10 10 0 0 1 8.947 5.527l-1.79.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2"></svg:path>`,
})
export class RiRemoteControlFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
