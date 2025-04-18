import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalCrossSymbolIcon],svg[streamline-medical-cross-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 5.51l-1.96-3.392l-2.58 1.49V.628H5.04v2.98l-2.58-1.49L.5 5.51L3.078 7L.5 8.49l1.96 3.392l2.58-1.49v2.98h3.92v-2.98l2.58 1.49L13.5 8.49L10.922 7z"></svg:path>`,
})
export class StreamlineMedicalCrossSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
