import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCapStraightIcon],svg[hugeicons-cap-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 5h-9.697c-2.739 0-4.108 0-4.959.879C5.66 6.586 5.526 7.64 5.5 9.5M21 19h-9.697c-2.739 0-4.108 0-4.959-.879c-.684-.707-.818-1.761-.844-3.621"></svg:path><svg:path d="M8 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0h13"></svg:path></svg:g>`,
})
export class HugeiconsCapStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
