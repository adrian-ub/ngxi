import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInstagramOneIcon],svg[icon-park-instagram-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:circle cx="9" cy="8" r="4"></svg:circle><svg:rect width="8" height="25" x="5" y="18" stroke-linejoin="round"></svg:rect><svg:path stroke-linejoin="round" d="M21 27.5V43H28V29C28 26.5 29.5 24.5 32 24.5C34.5 24.5 36 27 36 29V43H43V27.5C43 24.5 39.5 18 32 18C24.5 18 21 24.5 21 27.5Z"></svg:path></svg:g>`,
})
export class IconParkInstagramOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
