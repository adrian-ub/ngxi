import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesExpandFullOutlineIcon],svg[bubbles-expand-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.75 14.248l-9 9m22.5-15.75V.748H16.5M.75 16.498v6.75H7.5M23.25.748l-9 9m0 4.5l9 9M.75 7.498V.748H7.5m15.75 15.75v6.75H16.5M.75.748l9 9"></svg:path>`,
})
export class BubblesExpandFullOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
