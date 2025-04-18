import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTargetIcon],svg[icon-park-outline-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.417 18.583a6 6 0 1 0 8 8"></svg:path><svg:path d="M28.28 11.72C26.94 11.255 25.5 11 24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13s13-5.82 13-13c0-1.5-.254-2.94-.72-4.28"></svg:path><svg:path d="M33.568 6.433A19.9 19.9 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20a19.9 19.9 0 0 0-2.432-9.567M44 4L24 24"></svg:path></svg:g>`,
})
export class IconParkOutlineTargetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
