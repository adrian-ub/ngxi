import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGongfuIcon],svg[icon-park-twotone-gongfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGongfu0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="22" cy="8" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 18h10v11h-7v14m25.182-25H26v10.86L40 43"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGongfu0)"></svg:path>`,
})
export class IconParkTwotoneGongfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
