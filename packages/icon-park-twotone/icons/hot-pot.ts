import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHotPotIcon],svg[icon-park-twotone-hot-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHotPot0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 11V4m8 7V7m-16 4V7"></svg:path><svg:path fill="#555" d="M44 17H4c0 5.586 3.578 10.503 9 13.365C16.156 32.03 19.936 33 24 33s7.844-.97 11-2.635c5.422-2.862 9-7.78 9-13.365"></svg:path><svg:path d="M10.467 39h27.066M13 30.365L9 44m26-13.635L39 44M20 25h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHotPot0)"></svg:path>`,
})
export class IconParkTwotoneHotPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
