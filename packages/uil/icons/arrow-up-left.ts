import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilArrowUpLeftIcon],svg[uil-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.41 8H17a1 1 0 0 0 0-2H7a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 6 7v10a1 1 0 0 0 2 0V9.41l8.29 8.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class UilArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
