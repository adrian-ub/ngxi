import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareArrowMoveRightDownIcon],svg[hugeicons-square-arrow-move-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M11.55 15.105c-.771.66-1.864 1.995-2.317 1.86m0 0c-.528 0-1.536-1.31-2.274-1.86m2.274 1.86c.154-2.392-.32-5.472.688-6.728c1.119-1.32 4.298-.839 7.112-.971m0 0c.06.666-1.241 1.527-1.915 2.285m1.915-2.285c.123-.443-1.27-1.576-1.912-2.24"></svg:path></svg:g>`,
})
export class HugeiconsSquareArrowMoveRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
