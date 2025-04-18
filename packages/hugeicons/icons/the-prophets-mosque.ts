import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTheProphetsMosqueIcon],svg[hugeicons-the-prophets-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22v-2.5c0-2.068.345-2.5 2-2.5h12c1.655 0 2 .432 2 2.5V22zm-1 0h20M17.513 6C15.97 4 18.339 3 19 2c.661 1 3.03 2 1.488 4z"></svg:path><svg:path d="M17.5 6L17 17m0 5h4l-.5-16M11 8c1.984 2.25 6 3 6 9H5c0-6 4.015-6.75 5.999-9"></svg:path></svg:g>`,
})
export class HugeiconsTheProphetsMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
