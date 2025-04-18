import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSixCircularConnectionIcon],svg[icon-park-outline-six-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.856 20v8M27.464 38l3.464-2l3.464-2m-13.856 4l-3.465-2l-3.464-2m-3.463-14v8m3.463-14l3.465-2l3.464-2m6.928 0l3.464 2l3.464 2"></svg:path><svg:path d="M24 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class IconParkOutlineSixCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
