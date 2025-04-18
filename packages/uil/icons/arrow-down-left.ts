import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilArrowDownLeftIcon],svg[uil-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16H9.41l8.3-8.29a1 1 0 1 0-1.42-1.42L8 14.59V7a1 1 0 0 0-2 0v10a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54A1 1 0 0 0 7 18h10a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
