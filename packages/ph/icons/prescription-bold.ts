import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPrescriptionBoldIcon],svg[ph-prescription-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m189 188l19.52-19.51a12 12 0 0 0-17-17L172 171l-33.07-33A56 56 0 0 0 124 28H72a12 12 0 0 0-12 12v152a12 12 0 0 0 24 0v-52h23l48 48l-19.52 19.51a12 12 0 0 0 17 17L172 205l19.51 19.52a12 12 0 0 0 17-17ZM84 52h40a32 32 0 0 1 0 64H84Z"></svg:path>`,
})
export class PhPrescriptionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
