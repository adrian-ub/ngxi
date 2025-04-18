import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMoveInOneIcon],svg[icon-park-move-in-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M28 28L42 30.8L37.8 33.6L42 37.8L37.8 42L33.6 37.8L30.8 42L28 28Z" clip-rule="evenodd"></svg:path><svg:path d="M42 22V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H21"></svg:path></svg:g>`,
})
export class IconParkMoveInOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
