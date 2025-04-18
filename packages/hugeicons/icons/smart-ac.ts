import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartAcIcon],svg[hugeicons-smart-ac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3c2.339 0 3.508 0 4.362.536a3.5 3.5 0 0 1 1.102 1.102C22 5.492 22 6.66 22 9s0 3.508-.537 4.362a3.5 3.5 0 0 1-1.1 1.101C19.507 15 18.338 15 16 15H8c-2.339 0-3.508 0-4.362-.537a3.5 3.5 0 0 1-1.102-1.1C2 12.507 2 11.338 2 9s0-3.508.536-4.362a3.5 3.5 0 0 1 1.102-1.102C4.492 3 5.66 3 8 3zm-9 9h10m1-5h.009M6.8 18s.8 1.875-.8 3m11.2-3s-.8 1.875.8 3m-6-3v3" color="currentColor"></svg:path>`,
})
export class HugeiconsSmartAcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
