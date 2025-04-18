import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClickToFoldIcon],svg[icon-park-click-to-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M27 9V21H39"></svg:path><svg:path d="M21 39V27H9"></svg:path><svg:path d="M27 21L42 6"></svg:path><svg:path d="M21 27L6 42"></svg:path></svg:g>`,
})
export class IconParkClickToFoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
