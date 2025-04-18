import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChampionIcon],svg[hugeicons-champion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 17c-1.674 0-3.13 1.265-3.882 3.131c-.36.892.156 1.869.84 1.869h6.083c.685 0 1.2-.977.841-1.869C15.13 18.265 13.674 17 12 17m6.5-12h1.202c1.201 0 1.801 0 2.115.377c.313.378.183.944-.078 2.077l-.39 1.7C20.76 11.708 18.61 13.608 16 14M5.5 5H4.298c-1.201 0-1.802 0-2.115.377c-.313.378-.183.944.078 2.077l.39 1.7C3.24 11.708 5.39 13.608 8 14"></svg:path><svg:path d="M12 17c3.02 0 5.565-4.662 6.33-11.01c.211-1.754.317-2.632-.243-3.311S16.622 2 14.813 2H9.187c-1.81 0-2.714 0-3.274.679S5.46 4.236 5.67 5.991C6.435 12.338 8.98 17 12 17"></svg:path></svg:g>`,
})
export class HugeiconsChampionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
