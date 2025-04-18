import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStereoPerspectiveIcon],svg[icon-park-stereo-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 44V14L14 4H44V34L34 44H4Z"></svg:path><svg:path d="M34 14V44"></svg:path><svg:path d="M14 4L14 34"></svg:path><svg:path d="M4 14L34 14"></svg:path><svg:path d="M44 4L34 14"></svg:path><svg:path d="M4 44L14 34"></svg:path><svg:path d="M14 34L44 34"></svg:path></svg:g>`,
})
export class IconParkStereoPerspectiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
