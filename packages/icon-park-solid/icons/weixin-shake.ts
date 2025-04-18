import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinShakeIcon],svg[icon-park-solid-weixin-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWeixinShake0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 19L29 6L6 29l13 13z"></svg:path><svg:path stroke="#000" d="m16 29l3 3"></svg:path><svg:path stroke="#fff" d="m30 42l12-12M6 18L18 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWeixinShake0)"></svg:path>`,
})
export class IconParkSolidWeixinShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
