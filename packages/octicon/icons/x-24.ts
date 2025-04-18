import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconX24Icon],svg[octicon-x-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L12 13.06l-5.22 5.22a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042L10.94 12L5.72 6.78a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class OcticonX24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
