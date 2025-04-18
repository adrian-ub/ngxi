import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBoxingIcon],svg[icon-park-boxing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M38 36V42C38 43.1 37.11 44 36 44H17C15.9 44 15 43.11 15 42V36"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-miterlimit="2" d="M11 15V10C11 6.68629 13.6863 4 17 4H28H38C41.3137 4 44 6.68629 44 10V30C44 33.3137 41.3198 36 38.006 36C30.9668 36 19.6598 36 15 36C8 36 4 28 4 23C4 18 4 15 4 15H11Z"></svg:path><svg:line x1="11" x2="11" y1="14" y2="22"></svg:line></svg:g>`,
})
export class IconParkBoxingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
