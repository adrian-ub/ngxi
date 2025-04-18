import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSixCircularConnectionIcon],svg[icon-park-twotone-six-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSixCircularConnection0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.856 20v8M27.464 38l3.464-2l3.464-2m-13.856 4l-3.465-2l-3.464-2m-3.463-14v8m3.463-14l3.465-2l3.464-2m6.928 0l3.464 2l3.464 2"></svg:path><svg:path fill="#555" d="M24 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSixCircularConnection0)"></svg:path>`,
})
export class IconParkTwotoneSixCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
