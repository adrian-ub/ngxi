import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsKeySolidIcon],svg[teenyicons-key-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 4a4 4 0 1 1 1.547 3.16l-3.34 3.34l1.647 1.646l-.708.708L4.5 11.207L3.207 12.5l1.647 1.646l-.708.708L2.5 13.207L.854 14.854l-.708-.708L7.84 6.453A4 4 0 0 1 7 4m4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsKeySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
