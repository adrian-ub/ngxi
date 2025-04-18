import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCaneIcon],svg[healthicons-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25.86 38.836a1 1 0 0 1 .987-.836h.306a1 1 0 0 1 .986.836l.667 4A1 1 0 0 1 27.82 44h-1.64a1 1 0 0 1-.986-1.164z"></svg:path><svg:path fill-rule="evenodd" d="M24 43a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m3-28a1.5 1.5 0 0 1-1.5-1.5v-3c0-1.31-.397-2.146-.852-2.639A2.23 2.23 0 0 0 23 7.125a2.23 2.23 0 0 0-1.648.736c-.455.493-.852 1.329-.852 2.639a1.5 1.5 0 0 1-3 0c0-1.94.603-3.541 1.648-4.674A5.23 5.23 0 0 1 23 4.125c1.41 0 2.813.575 3.852 1.701C27.897 6.96 28.5 8.56 28.5 10.5v3A1.5 1.5 0 0 1 27 15m0 1.366A1.53 1.53 0 0 1 26 16v21a1.53 1.53 0 0 1 1-.366c.384 0 .735.138 1 .366V16a1.53 1.53 0 0 1-1 .366" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsCaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
