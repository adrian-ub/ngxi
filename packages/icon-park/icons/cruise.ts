import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCruiseIcon],svg[icon-park-cruise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M38 42L41.3908 32.6752C41.738 31.7205 41.3143 30.6572 40.4057 30.2028L24.8944 22.4472C24.3314 22.1657 23.6686 22.1657 23.1056 22.4472L7.59432 30.2028C6.68569 30.6572 6.26199 31.7205 6.60916 32.6752L10 42"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M35 14H13C11.8954 14 11 14.8954 11 16V28L23.1619 22.3868C23.6937 22.1414 24.3063 22.1414 24.8381 22.3868L37 28V16C37 14.8954 36.1046 14 35 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 14V6C29 4.89543 28.1046 4 27 4H21C19.8954 4 19 4.89543 19 6V14"></svg:path><svg:path stroke-linecap="round" d="M24 32V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44C8 44 8 42 11 42C14 42 14 44 17 44C20 44 20.5 42 24 42C27.5 42 28 44 31 44C34 44 34 42 37 42C40 42 40 44 44 44"></svg:path></svg:g>`,
})
export class IconParkCruiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
