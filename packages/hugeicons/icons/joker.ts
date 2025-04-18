import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJokerIcon],svg[hugeicons-joker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M4.967 17c-3.524-5.5 4.023-6-.008-10m1.42-2c1.104 0 3.62 1 3.62 3M5 17c5.217 1.452 8.328 1.209 14 0M4 20c5.963 1.452 9.518 1.209 16 0"></svg:path><svg:path d="M18.03 6.044c-2.366.435-7.82 3.74-6.98 11.194m7.202-9.15c-1.215.573-3.126 1.8-.653 4.824c.78.955 1.687 2.967 1.352 3.957"></svg:path></svg:g>`,
})
export class HugeiconsJokerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
