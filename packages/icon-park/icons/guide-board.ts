import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGuideBoardIcon],svg[icon-park-guide-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4V41"></svg:path><svg:path fill="#2F88FF" d="M24 8H39.5455L42 12L39.5455 16H24V8Z"></svg:path><svg:path fill="#2F88FF" d="M24 22H8.45455L6 26L8.45455 30H24V22Z"></svg:path><svg:path stroke-linecap="round" d="M16 42H32"></svg:path></svg:g>`,
})
export class IconParkGuideBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
