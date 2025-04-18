import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentGym02Icon],svg[hugeicons-equipment-gym-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v18M21 3v18m1-15H2m13.5 4c1.105 0 2 .97 2 2.165c0 .283-.05.554-.142.802c-.294.798-3.489.617-3.716 0a2.3 2.3 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165m-7 0c1.105 0 2 .97 2 2.165c0 .283-.05.554-.142.802c-.294.798-3.489.617-3.716 0a2.3 2.3 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165m0 0V6m7 4V6" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentGym02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
