import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGpsLineIcon],svg[ri-gps-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.132 20.737A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.132 8.737l-.896-1.791a8 8 0 1 0-7.945 0zm1.792-3.584a6 6 0 1 1 6.151 0l-.898-1.797a4 4 0 1 0-4.354 0zM12 16l3 6H9z"></svg:path>`,
})
export class RiGpsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
