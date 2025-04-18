import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsSortIcon],svg[ls-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 255L200 17c17-22 45-22 62 0l191 238c17 22 9 40-20 40H29c-29 0-37-18-20-40m444 188L262 681c-17 22-45 22-62 0L9 443c-17-22-9-40 20-40h404c29 0 37 18 20 40"></svg:path>`,
})
export class LsSortIcon {
  readonly viewBox = input("0 0 462 698")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
