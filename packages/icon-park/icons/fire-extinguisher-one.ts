import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFireExtinguisherOneIcon],svg[icon-park-fire-extinguisher-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 18C16 13.5817 19.5817 10 24 10C28.4183 10 32 13.5817 32 18V42C32 43.1046 31.1046 44 30 44H18C16.8954 44 16 43.1046 16 42V18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V34"></svg:path><svg:rect width="9" height="4" x="20" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#2F88FF" stroke="#000" d="M29 5L38 4V10L29 9V5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 6.99981C17 6.99981 12.5 6.49981 10 8.99981C7.58343 11.4164 8.00004 13.9998 8.00004 17.9998"></svg:path></svg:g>`,
})
export class IconParkFireExtinguisherOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
