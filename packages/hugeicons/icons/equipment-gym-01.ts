import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentGym01Icon],svg[hugeicons-equipment-gym-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 11.5h8.5c1.393 0 1.75.41 1.75 1.75c0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 15 6 14.59 6 13.25c0-1.393.41-1.75 1.75-1.75m0 3.5h8.5c1.393 0 1.75.41 1.75 1.75c0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 18.5 6 18.09 6 16.75C6 15.357 6.41 15 7.75 15m0 3.5h8.5c1.393 0 1.75.41 1.75 1.75c0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 22 6 21.59 6 20.25c0-1.393.41-1.75 1.75-1.75M22 7.5l-.799-.999c-.59-.737-.885-1.106-1.296-1.303c-.344-.166-.732-.193-1.405-.197M2 7.501l.799-1c.59-.737.885-1.106 1.296-1.303c.344-.166.732-.193 1.405-.197m10.5 0H8M16 2v9.5M8 2v9.5" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentGym01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
