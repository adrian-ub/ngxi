import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoreVerticalSquare02Icon],svg[hugeicons-more-vertical-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.992 12h.009m-.017 4h.01M12 8h.009m-9.525 4c0-4.478 0-6.718 1.392-8.109C5.266 2.5 7.506 2.5 11.984 2.5s6.718 0 8.11 1.391c1.39 1.391 1.39 3.63 1.39 8.109c0 4.478 0 6.718-1.39 8.109c-1.392 1.391-3.631 1.391-8.11 1.391s-6.717 0-8.108-1.391S2.484 16.479 2.484 12" color="currentColor"></svg:path>`,
})
export class HugeiconsMoreVerticalSquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
