import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStereoPerspectiveIcon],svg[icon-park-outline-stereo-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 44V14L14 4h30v30L34 44zm30-30v30M14 4v30M4 14h30M44 4L34 14M4 44l10-10m0 0h30"></svg:path>`,
})
export class IconParkOutlineStereoPerspectiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
