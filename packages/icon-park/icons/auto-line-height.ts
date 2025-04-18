import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoLineHeightIcon],svg[icon-park-auto-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7H42"></svg:path><svg:path d="M6 41H42"></svg:path><svg:path stroke-linejoin="round" d="M24 13L14 35"></svg:path><svg:path stroke-linejoin="round" d="M18 28L30 28"></svg:path><svg:path stroke-linejoin="round" d="M24 13L34 35"></svg:path></svg:g>`,
})
export class IconParkAutoLineHeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
