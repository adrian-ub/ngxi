import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFastForwardIcon],svg[ci-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18V6l8.5 6l-8.5 6Zm-9 0V6l8.5 6L4 18Z"></svg:path>`,
})
export class CiFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
