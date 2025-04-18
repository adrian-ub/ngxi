import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCplusplusSolidIcon],svg[teenyicons-cplusplus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.421L14 4.213v6.574L7.5 14.58L1 10.787V4.213zM6.5 4a3.5 3.5 0 1 0 0 7h.586a3.9 3.9 0 0 0 2.768-1.146l-.708-.708a2.9 2.9 0 0 1-2.06.854H6.5a2.5 2.5 0 0 1 0-5h.586a2.9 2.9 0 0 1 2.06.854l.708-.708A3.9 3.9 0 0 0 7.086 4zM7 7V6h1v1h2V6h1v1h1v1h-1v1h-1V8H8v1H7V8H6V7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsCplusplusSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
