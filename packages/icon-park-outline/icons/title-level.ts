import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTitleLevelIcon],svg[icon-park-outline-title-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 8v32M24 8v32M7 24h16"></svg:path><svg:path d="M32 24v16m0-8.976C32 28.46 34 26 37 26s5 2.358 5 5.024v8.99"></svg:path></svg:g>`,
})
export class IconParkOutlineTitleLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
