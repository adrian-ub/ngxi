import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTableColBeforeIcon],svg[dashicons-table-col-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92zM12.8 1.28H1.28v14.08H12.8zm6.4 0h-5.12v3.84h5.12zm0 5.12h-5.12v3.84h5.12zm0 5.12h-5.12v3.84h5.12z"></svg:path>`,
})
export class DashiconsTableColBeforeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
