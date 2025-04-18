import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStereoNestingIcon],svg[icon-park-stereo-nesting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 40L4 33V17L17 10L30 17V29"></svg:path><svg:path d="M30 8L43 15V31L30 38L17 31V19"></svg:path></svg:g>`,
})
export class IconParkStereoNestingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
