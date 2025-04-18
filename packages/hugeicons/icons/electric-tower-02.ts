import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricTower02Icon],svg[hugeicons-electric-tower-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 2H9v5h6zm4.5 20h-15L9 7h6zM2 22h20M3 7h18M3 7v2m0-2l6-5m12 5v2m0-2l-6-5"></svg:path><svg:path d="m15.5 9.5l-8.5 5L18.5 20"></svg:path><svg:path d="m8.5 9.5l8.5 5L5.5 20"></svg:path></svg:g>`,
})
export class HugeiconsElectricTower02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
