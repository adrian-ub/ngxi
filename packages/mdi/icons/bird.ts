import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBirdIcon],svg[mdi-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 11.5l-3.05-1.13c-.26-1.15-.91-1.81-.91-1.81a4.19 4.19 0 0 0-5.93 0l-1.48 1.48L5 3c-1 4 0 8 2.45 11.22L2 19.5s8.89 2 14.07-2.05c2.76-2.16 3.38-3.42 3.77-4.75zm-5.29.22c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0s.39 1.02 0 1.41"></svg:path>`,
})
export class MdiBirdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
