import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCheveronOutlineUpIcon],svg[zondicons-cheveron-outline-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10a10 10 0 1 1 20 0a10 10 0 0 1-20 0m10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16m.7-10.54L14.25 11l-1.41 1.41L10 9.6l-2.83 2.8L5.76 11L10 6.76z"></svg:path>`,
})
export class ZondiconsCheveronOutlineUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
