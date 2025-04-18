import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStandUpIcon],svg[icon-park-outline-stand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M17 22.458c-4.057 1.274-7 5.065-7 9.542c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8.662-5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 18l1.5-2H30l-7 14h14v14"></svg:path><svg:circle cx="34" cy="8" r="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineStandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
