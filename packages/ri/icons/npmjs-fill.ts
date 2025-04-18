import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNpmjsFillIcon],svg[ri-npmjs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 4h-10v10h5V9.5h2.5V17h2.5z"></svg:path>`,
})
export class RiNpmjsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
