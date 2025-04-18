import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsManIcon],svg[hugeicons-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 4.25C9.25 5.77 10.48 7 12 7s2.75-1.23 2.75-2.75S13.52 1.5 12 1.5S9.25 2.73 9.25 4.25m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-.98 18.24c.51.51 1.16.51 2.23.51s1.72 0 2.24-.52c.51-.51.51-1.16.51-2.23v-3.26c.65-.03 1.1-.13 1.49-.51c.51-.51.51-1.16.51-2.23v-1.5c0-2.03 0-3.14-.8-3.94C15.14 8 14.02 8 12 8s-3.14 0-3.94.81c-.81.8-.81 1.91-.81 3.94v1.5c0 1.07 0 1.71.52 2.24c.38.38.83.48 1.48.5v3.26c0 1.07 0 1.71.52 2.24M9.12 9.87c.35-.36 1.13-.37 2.88-.37v.01c1.75 0 2.54.01 2.89.37c.35.35.36 1.13.36 2.88v1.5c0 .5 0 1.11-.07 1.18c-.11.07-.68.07-1.179.07H14c-.41 0-.75.34-.75.75v4c0 .5 0 1.11-.07 1.18c-.22.14-2.15.13-2.35 0c-.08-.09-.08-.7-.08-1.19v-4c0-.41-.34-.75-.75-.75h-.002c-.5 0-1.068 0-1.168-.06c-.08-.09-.08-.7-.08-1.19v-1.5c0-1.74.02-2.53.37-2.88" color="currentColor"></svg:path>`,
})
export class HugeiconsManIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
