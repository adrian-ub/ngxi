import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRocketIcon],svg[icon-park-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M18.705 7.89449L24 4L29.295 7.89449C32.8819 10.5327 35 14.7198 35 19.1725V37H13V19.1725C13 14.7198 15.1181 10.5327 18.705 7.89449Z"></svg:path><svg:path stroke-linecap="round" d="M13 17L7 23V31L13 28V17Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M35 17L41 23V31L35 28V17Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M18 39V42"></svg:path><svg:path stroke-linecap="round" d="M24 39V44"></svg:path><svg:path stroke-linecap="round" d="M30 39V42"></svg:path></svg:g>`,
})
export class IconParkRocketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
