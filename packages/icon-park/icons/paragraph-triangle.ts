import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphTriangleIcon],svg[icon-park-paragraph-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 9H42"></svg:path><svg:path d="M24 19H42"></svg:path><svg:path d="M6 29H42"></svg:path><svg:path d="M6 39H42"></svg:path><svg:path fill="#2F88FF" d="M6 9.76619C6 8.9889 6.84797 8.50878 7.5145 8.9087L14.5708 13.1425C15.2182 13.5309 15.2182 14.4691 14.5708 14.8575L7.5145 19.0913C6.84797 19.4912 6 19.0111 6 18.2338V9.76619Z"></svg:path></svg:g>`,
})
export class IconParkParagraphTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
