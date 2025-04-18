import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkReadBookIcon],svg[icon-park-read-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M24 21V44C20.7086 40 10.6286 40 6 40V18C15.8743 18 22.1143 20 24 21Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M24 21V44C27.2914 40 37.3714 40 42 40V18C32.1257 18 25.8857 20 24 21Z"></svg:path><svg:circle cx="24" cy="12" r="8"></svg:circle></svg:g>`,
})
export class IconParkReadBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
