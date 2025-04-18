import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStructureBoldDuotoneIcon],svg[solar-structure-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M16.093 4.256A1 1 0 0 0 16 4.25H8a1 1 0 0 0-.093.006a3 3 0 0 1 0 1.488q.045.006.093.006h8a1 1 0 0 0 .093-.006a3 3 0 0 1 0-1.488M19 8q.386 0 .744-.093q.006.045.006.093v8a1 1 0 0 1-.006.093a3 3 0 0 0-1.488 0A1 1 0 0 1 18.25 16V8q0-.048.006-.093q.358.091.744.093m-2.907 10.256A1 1 0 0 0 16 18.25H8a1 1 0 0 0-.093.006a3 3 0 0 1 0 1.488q.045.006.093.006h8a1 1 0 0 0 .093-.006a3 3 0 0 1 0-1.488M5 8q-.386 0-.744-.093A1 1 0 0 0 4.25 8v8q0 .048.006.093a3 3 0 0 1 1.488 0A1 1 0 0 0 5.75 16V8a1 1 0 0 0-.006-.093Q5.386 7.998 5 8" opacity=".5"></svg:path>`,
})
export class SolarStructureBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
