import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentGym03Icon],svg[hugeicons-equipment-gym-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 3v5M6 3v5m14.5-4v1.5m0 0V7m0-1.5H22M3.5 4v1.5m0 0V7m0-1.5H2m16 0H6M7.277 19h9.447c1.237 0 1.856 0 2.112-.303c.58-.686-.532-1.594-.938-2.051c-.457-.516-.792-.646-1.468-.646H7.57c-.676 0-1.01.13-1.468.646c-.406.457-1.518 1.365-.938 2.051C5.42 19 6.04 19 7.277 19M9 8v8m6-8v8m1 3v2m-8-2v2" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentGym03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
