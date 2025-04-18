import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDizzyFaceIcon],svg[icon-park-outline-dizzy-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="m19 18l-4 4m0-4l4 4m14-4l-4 4m0-4l4 4"></svg:path><svg:rect width="8" height="8" x="20" y="28" stroke-linecap="round" rx="4"></svg:rect></svg:g>`,
})
export class IconParkOutlineDizzyFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
