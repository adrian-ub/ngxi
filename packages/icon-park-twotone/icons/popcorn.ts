import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePopcornIcon],svg[icon-park-twotone-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPopcorn0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M33.696 40.868L39 17H7l5.304 23.868c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44H29.79c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692"></svg:path><svg:path d="m27 44l1-27m-9 27l-1-27m13 27H15m16-27H15m-4 0s-1-3 .5-4.5s4.5-1 4.5-1s0-3 2-4s5 .5 5 .5s2-3.357 5-2.5s3 4.5 3 4.5s2.5 0 4 2s0 5 0 5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPopcorn0)"></svg:path>`,
})
export class IconParkTwotonePopcornIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
