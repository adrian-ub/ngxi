import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlaySquareIcon],svg[hugeicons-play-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.953 12.395c-.151.627-.867 1.07-2.3 1.955c-1.383.856-2.075 1.285-2.633 1.113a1.4 1.4 0 0 1-.61-.393C9 14.62 9 13.746 9 12s0-2.62.41-3.07c.17-.186.38-.321.61-.392c.558-.173 1.25.256 2.634 1.112c1.432.886 2.148 1.329 2.3 1.955a1.7 1.7 0 0 1 0 .79"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsPlaySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
