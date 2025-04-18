import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHourglass2FillIcon],svg[ri-hourglass-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v4.46L13.537 12L20 17.54V22H4v-4.46L10.463 12L4 6.46zm12.297 5L18 5.54V4H6v1.54L7.703 7zM12 13.317L6 18.46V20h1l5-3l5 3h1v-1.54z"></svg:path>`,
})
export class RiHourglass2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
