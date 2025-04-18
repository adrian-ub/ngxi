import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGongfuIcon],svg[icon-park-outline-gongfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="22" cy="8" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 18h10v11h-7v14m25.182-25H26v10.86L40 43"></svg:path></svg:g>`,
})
export class IconParkOutlineGongfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
