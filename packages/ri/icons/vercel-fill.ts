import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVercelFillIcon],svg[ri-vercel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21.648H1L12 2.352z"></svg:path>`,
})
export class RiVercelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
