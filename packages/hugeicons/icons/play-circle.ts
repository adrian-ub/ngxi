import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlayCircleIcon],svg[hugeicons-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M15.453 12.395c-.151.627-.867 1.07-2.3 1.955c-1.383.856-2.075 1.285-2.633 1.113a1.4 1.4 0 0 1-.61-.393c-.41-.45-.41-1.324-.41-3.07s0-2.62.41-3.07c.17-.186.38-.321.61-.392c.558-.173 1.25.256 2.634 1.112c1.432.886 2.148 1.329 2.3 1.955a1.7 1.7 0 0 1 0 .79"></svg:path></svg:g>`,
})
export class HugeiconsPlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
