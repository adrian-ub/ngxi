import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRemoteControlLineIcon],svg[ri-remote-control-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a1 1 0 0 1 1 1v9h-2v-8H8v8H6v-9a1 1 0 0 1 1-1zm-5 4v2h-2v-2zm0-10a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.156 0l-1.79-.895A6 6 0 0 1 12 6m0-4a10 10 0 0 1 8.947 5.527l-1.79.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2"></svg:path>`,
})
export class RiRemoteControlLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
