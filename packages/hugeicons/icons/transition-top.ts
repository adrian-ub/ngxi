import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransitionTopIcon],svg[hugeicons-transition-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 22c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14H6c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C2 15.9 2 16.6 2 18s0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22zM12 6v8m0-8c-.7 0-2.008 1.994-2.5 2.5M12 6c.7 0 2.008 1.994 2.5 2.5"></svg:path><svg:path d="M2 8c0-2.339 0-3.508.536-4.362a3.5 3.5 0 0 1 1.102-1.102C4.492 2 5.66 2 8 2h8c2.339 0 3.508 0 4.362.536a3.5 3.5 0 0 1 1.102 1.102C22 4.492 22 5.66 22 8"></svg:path></svg:g>`,
})
export class HugeiconsTransitionTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
