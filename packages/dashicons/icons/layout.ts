import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsLayoutIcon],svg[dashicons-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5v11H2zm6 0h5v5H8zm6 0h4v16h-4zM8 8h5v5H8zm-6 6h11v4H2z"></svg:path>`,
})
export class DashiconsLayoutIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
