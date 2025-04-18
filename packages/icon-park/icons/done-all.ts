import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDoneAllIcon],svg[icon-park-done-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 24L15.25 25.25M44 14L24 34L22.75 32.75"></svg:path><svg:path d="M4 24L14 34L34 14"></svg:path></svg:g>`,
})
export class IconParkDoneAllIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
