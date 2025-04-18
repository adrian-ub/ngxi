import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTitleLevelIcon],svg[icon-park-title-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 8.00049V40.0005"></svg:path><svg:path stroke-linejoin="round" d="M24 8.00049V40.0005"></svg:path><svg:path stroke-linejoin="round" d="M7 24.0005H23"></svg:path><svg:path d="M32 24V40"></svg:path><svg:path d="M32 31.0239C32 28.4599 34 26.0005 37 26.0005C40 26.0005 42 28.3585 42 31.0239C42 32.8009 42 36.4642 42 40.0139"></svg:path></svg:g>`,
})
export class IconParkTitleLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
