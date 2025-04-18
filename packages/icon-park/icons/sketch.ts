import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSketchIcon],svg[icon-park-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M18.6 16H29.4L33 20.7059L24 32L15 20.7059L18.6 16Z"></svg:path></svg:g>`,
})
export class IconParkSketchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
