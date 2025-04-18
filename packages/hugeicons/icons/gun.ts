import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGunIcon],svg[hugeicons-gun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.388 10.569l-1.59 6.682a6 6 0 0 0-.083.37a3 3 0 0 0 .195 1.686c.036.086.079.17.164.341c.056.113.084.169.097.212a.5.5 0 0 1-.39.632c-.045.008-.107.008-.232.008H4.528c-1.164 0-1.746 0-2.042-.382s-.155-.95.127-2.086l1.353-5.448a1.62 1.62 0 0 0-1.563-2.015a.404.404 0 0 1-.403-.406V7.59c0-2.465.511-2.979 2.96-2.979h13.208c.62 0 1.089-.146 1.595-.486c.591-.397 1.32-1.118 1.856-.115c.539 1.007.568 5.234-.316 6.124c-.433.436-1.131.436-2.527.436zm0 0h-1.48"></svg:path><svg:path d="M9 14.5h.877c.95 0 1.426 0 1.843-.09a4 4 0 0 0 2.746-2.144c.188-.383.303-.844.534-1.766m-13-3h2.028c1.203 0 1.804 0 2.287-.299c.484-.298.753-.836 1.29-1.912L8 4.5m14 3h-3"></svg:path></svg:g>`,
})
export class HugeiconsGunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
