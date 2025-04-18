import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleTearIcon],svg[icon-park-rectangle-tear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8Z"></svg:path><svg:path stroke="#fff" d="M27 6L21 12L27 18L21 24L27 30L21 36L27 42"></svg:path><svg:path stroke="#000" d="M18 6H34"></svg:path><svg:path stroke="#000" d="M18 42H34"></svg:path></svg:g>`,
})
export class IconParkRectangleTearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
