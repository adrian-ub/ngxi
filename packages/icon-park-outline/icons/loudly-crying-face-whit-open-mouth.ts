import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLoudlyCryingFaceWhitOpenMouthIcon],svg[icon-park-outline-loudly-crying-face-whit-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="M24 29c5 0 7 4 7 4H17s2-4 7-4m11-11l-7-1m5 1v9M20 17l-7 1m2 0v9"></svg:path></svg:g>`,
})
export class IconParkOutlineLoudlyCryingFaceWhitOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
