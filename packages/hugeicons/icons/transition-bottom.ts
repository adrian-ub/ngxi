import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransitionBottomIcon],svg[hugeicons-transition-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 3.9 22 4.6 22 6s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093C20.1 10 19.4 10 18 10H6c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6s0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2zm-6 16v-8m0 8c-.7 0-2.008-1.994-2.5-2.5M12 18c.7 0 2.008-1.994 2.5-2.5"></svg:path><svg:path d="M2 16c0 2.339 0 3.508.536 4.362a3.5 3.5 0 0 0 1.102 1.102C4.492 22 5.66 22 8 22h8c2.339 0 3.508 0 4.362-.537a3.5 3.5 0 0 0 1.102-1.1C22 19.507 22 18.338 22 16"></svg:path></svg:g>`,
})
export class HugeiconsTransitionBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
