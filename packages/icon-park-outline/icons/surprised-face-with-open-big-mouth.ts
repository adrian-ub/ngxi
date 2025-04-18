import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSurprisedFaceWithOpenBigMouthIcon],svg[icon-park-outline-surprised-face-with-open-big-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="M31 18v1m-14-1v1"></svg:path><svg:rect width="12" height="12" x="18" y="24" stroke-linecap="round" rx="6"></svg:rect></svg:g>`,
})
export class IconParkOutlineSurprisedFaceWithOpenBigMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
