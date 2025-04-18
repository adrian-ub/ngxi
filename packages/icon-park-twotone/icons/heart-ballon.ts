import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHeartBallonIcon],svg[icon-park-twotone-heart-ballon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHeartBallon0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M17.333 4C13.333 4 12 7.156 12 11.05C12 18.1 19.8 24.51 24 26c4.2-1.49 12-7.9 12-14.95C36 7.156 34.312 4 30.667 4C28.434 4 25.194 7.077 24 8.889C22.806 7.077 19.566 4 17.333 4"></svg:path><svg:path d="M24 26c-2 1.09-5 3.5-5 7s10 2.5 10 6s-11 5-11 5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHeartBallon0)"></svg:path>`,
})
export class IconParkTwotoneHeartBallonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
