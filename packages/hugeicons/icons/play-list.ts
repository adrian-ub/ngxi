import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlayListIcon],svg[hugeicons-play-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 7.5h19m-4.5-5l-3 5m-4-5l-3 5M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M14.953 14.895c-.151.627-.867 1.07-2.3 1.955c-1.383.856-2.075 1.285-2.633 1.112a1.4 1.4 0 0 1-.61-.392C9 17.12 9 16.247 9 14.5s0-2.62.41-3.07c.17-.186.38-.321.61-.393c.558-.172 1.25.257 2.634 1.113c1.432.886 2.148 1.329 2.3 1.955a1.7 1.7 0 0 1 0 .79"></svg:path></svg:g>`,
})
export class HugeiconsPlayListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
