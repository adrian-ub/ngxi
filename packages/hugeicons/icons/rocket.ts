import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRocketIcon],svg[hugeicons-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 10.167l4.123-4.124c1.125-1.124 1.688-1.687 2.308-2.14A9.9 9.9 0 0 1 18.74 2.12C19.499 2 20.293 2 21.885 2c.083 0 .115.038.115.115c0 1.59 0 2.386-.119 3.145a9.9 9.9 0 0 1-1.784 4.309c-.453.62-1.016 1.183-2.14 2.308L13.833 16"></svg:path><svg:path d="M10.341 8.098c-1.703 0-3.843-.36-5.437.3C3.737 8.88 2.878 10 2 10.878l3.306 1.418c.876.375.34 1.48.195 2.206c-.161.808-.152.838.43 1.42l2.147 2.146c.582.583.612.592 1.42.43c.725-.145 1.831-.68 2.206.196L13.121 22c.878-.878 1.998-1.737 2.481-2.904c.66-1.594.3-3.734.3-5.437M12 20l-1 1m-7-9l-1 1m12-8.92c1.2.18 2.46.66 3.161 1.38c.897.792 1.519 1.86 1.759 3.54m-1.98-2.94L16.5 7.5"></svg:path></svg:g>`,
})
export class HugeiconsRocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
