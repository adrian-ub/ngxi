import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInteliusSearchIcon],svg[arcticons-intelius-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.433 11.002c-7.621 9.555-5.46 18.246-4.485 26.59Q25.696 21.637 31.996 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.948 37.592L28.396 42.5c-4.169-7.597-8.774-15.585-20.829-17.859c16.79-1.234 23.976 5.196 28.38 12.951"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.567 14.863v9.778c11.628-.068 20.424-10.06 24.43-19.141c-5.974 6.196-13.252 10.874-24.43 9.363"></svg:path>`,
})
export class ArcticonsInteliusSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
