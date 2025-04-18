import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolder3FillIcon],svg[ri-folder-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1m-9.586-3H2V4a1 1 0 0 1 1-1h7.414z"></svg:path>`,
})
export class RiFolder3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
