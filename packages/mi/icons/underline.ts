import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miUnderlineIcon],svg[mi-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4a1 1 0 1 0-2 0v7a4 4 0 0 1-8 0V4a1 1 0 1 0-2 0v7a6 6 0 0 0 12 0zM7 19a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MiUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
