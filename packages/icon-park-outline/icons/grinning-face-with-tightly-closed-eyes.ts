import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGrinningFaceWithTightlyClosedEyesIcon],svg[icon-park-outline-grinning-face-with-tightly-closed-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="M17 31s2 4 7 4s7-4 7-4M16 16l3 3l-3 3m16-6l-3 3l3 3"></svg:path></svg:g>`,
})
export class IconParkOutlineGrinningFaceWithTightlyClosedEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
