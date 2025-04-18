import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTransformIcon],svg[icon-park-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="13.715" cy="13.714" r="6.857" fill="#2F88FF"></svg:circle><svg:circle cx="34.286" cy="34.285" r="6.857" fill="#2F88FF"></svg:circle><svg:path d="M24.001 44C12.9553 44 4.00098 35.0457 4.00098 24L10.6676 27.3333"></svg:path><svg:path d="M24.001 4C35.0467 4 44.001 12.9543 44.001 24L37.3343 20.6667"></svg:path></svg:g>`,
})
export class IconParkTransformIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
