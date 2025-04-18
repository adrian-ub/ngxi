import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFilePyBoldIcon],svg[ph-file-py-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-24a12 12 0 0 0 0 24h28a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23Zm-96 83H48a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64m0 40h-4v-16h4a8 8 0 0 1 0 16m80 7.44V208a12 12 0 0 1-24 0v-20.56l-18.18-29.08a12 12 0 0 1 20.36-12.72l9.82 15.72l9.82-15.72a12 12 0 0 1 20.36 12.72Z"></svg:path>`,
})
export class PhFilePyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
