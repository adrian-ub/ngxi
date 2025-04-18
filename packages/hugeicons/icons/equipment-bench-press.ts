import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentBenchPressIcon],svg[hugeicons-equipment-bench-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 3v5M6 3v5m14.5-4v1.5m0 0V7m0-1.5H22M3.5 4v1.5m0 0V7m0-1.5H2m16 0H6m4 0V10m4-4.5V10m4.952 6H5.062m9.194-6h-4.05c-1.007 0-1.38.144-1.934.992l-3.013 4.612c-.186.284-.259.51-.259.854C5 18.611 5.873 19 7.847 19h8.25C18.133 19 19 18.616 19 16.408c0-.306-.057-.51-.204-.773l-2.537-4.53c-.534-.953-.918-1.105-2.003-1.105M16 19v2m-8-2v2" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentBenchPressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
