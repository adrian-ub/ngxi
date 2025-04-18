import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkContrastViewIcon],svg[icon-park-contrast-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="17" height="34" x="7" y="7" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 7H28"></svg:path><svg:path stroke-linecap="round" d="M33 7H35"></svg:path><svg:path stroke-linecap="round" d="M33 41H35"></svg:path><svg:path stroke-linecap="round" d="M41 7V9"></svg:path><svg:path stroke-linecap="round" d="M41 15V17"></svg:path><svg:path stroke-linecap="round" d="M41 23V25"></svg:path><svg:path stroke-linecap="round" d="M41 31V33"></svg:path><svg:path stroke-linecap="round" d="M41 39V41"></svg:path><svg:path stroke-linecap="round" d="M27 41H24"></svg:path><svg:path stroke-linecap="round" d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkContrastViewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
