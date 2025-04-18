import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonU3Icon],svg[carbon-u3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 23H9a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M23 9h-6v2h6v4h-5v2h5v4h-6v2h6a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z" fill="currentColor"></svg:path>`,
})
export class CarbonU3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
