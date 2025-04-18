import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScanditDemoIcon],svg[arcticons-scandit-demo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.858 27.066v9.779m3.792-9.779v9.779m5.584-9.779v9.779m4.709-9.779v9.779m5.217-9.779v9.779m3.032-9.779v9.779m3.69-9.779v9.779M10.86 11.155v9.733m3.791-9.733v9.733m5.584-9.733v9.733m4.707-9.733v9.733m5.218-9.733v9.733m3.03-9.733v9.733m3.69-9.733v9.733M5.5 23.82h37m-37 0h37m0-9.447V9.5c0-2.216-1.784-4-4-4h-4.873m-19.254 0H9.5c-2.216 0-4 1.784-4 4v4.873M33.627 42.5H38.5c2.216 0 4-1.784 4-4v-4.873m-37 0V38.5c0 2.216 1.784 4 4 4h4.873"></svg:path>`,
})
export class ArcticonsScanditDemoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
