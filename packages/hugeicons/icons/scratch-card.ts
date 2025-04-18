import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScratchCardIcon],svg[hugeicons-scratch-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 4H9C5.7 4 4.05 4 3.025 5.025S2 7.7 2 11v2c0 3.3 0 4.95 1.025 5.975S5.7 20 9 20h6c3.3 0 4.95 0 5.975-1.025S22 16.3 22 13v-2c0-3.3 0-4.95-1.025-5.975S18.3 4 15 4"></svg:path><svg:path d="M21.5 8h-10l1 1.5h9zM10 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsScratchCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
