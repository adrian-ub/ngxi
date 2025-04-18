import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFundsIcon],svg[icon-park-outline-funds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="14" cy="10" rx="10" ry="5"></svg:ellipse><svg:path d="M4 10v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7"></svg:path><svg:path d="M4 17v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7"></svg:path><svg:path d="M4 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7"></svg:path><svg:path d="M4 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7"></svg:path><svg:ellipse cx="34" cy="24" rx="10" ry="5"></svg:ellipse><svg:path d="M24 24v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7"></svg:path><svg:path d="M24 31v7c0 2.761 4.477 5 10 5s10-2.239 10-5v-7"></svg:path></svg:g>`,
})
export class IconParkOutlineFundsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
