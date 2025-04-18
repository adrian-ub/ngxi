import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTableColAfterIcon],svg[dashicons-table-col-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92zM6.4 1.28H1.28v3.84H6.4zm0 5.12H1.28v3.84H6.4zm0 5.12H1.28v3.84H6.4zM19.2 1.28H7.68v14.08H19.2z"></svg:path>`,
})
export class DashiconsTableColAfterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
