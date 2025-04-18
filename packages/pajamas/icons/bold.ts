import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasBoldIcon],svg[pajamas-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5a3.5 3.5 0 0 0 1.852-6.47A3.5 3.5 0 0 0 8.5 2zm4.5 5a1.5 1.5 0 1 0 0-3H5v3zM5 9v3h4.5a1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
