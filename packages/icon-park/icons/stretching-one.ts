import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStretchingOneIcon],svg[icon-park-stretching-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 8L29 17.5909V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.1111 23.25L19 18V28.9167L7 41"></svg:path></svg:g>`,
})
export class IconParkStretchingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
