import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAcousticIcon],svg[icon-park-acoustic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24 3.99976V43.9998"></svg:path><svg:path d="M34 11.9998V35.9998"></svg:path><svg:path d="M4 17.9998V29.9998"></svg:path><svg:path d="M44 17.9998V29.9998"></svg:path><svg:path d="M14 11.9998V35.9998"></svg:path></svg:g>`,
})
export class IconParkAcousticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
