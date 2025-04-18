import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePrisonIcon],svg[icon-park-outline-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4M6 7h14m8 15H6v22h22m-12 0V13m-6 9v-9m3-9v3m14 6v3m8-3v3m8-3v3"></svg:path><svg:path stroke-linejoin="round" d="M43 44V16H27v28z"></svg:path><svg:path d="M35 34v10m-4 0h8"></svg:path></svg:g>`,
})
export class IconParkOutlinePrisonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
