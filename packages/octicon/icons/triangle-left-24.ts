import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleLeft24Icon],svg[octicon-triangle-left-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.854 11.646l5.792-5.792a.5.5 0 0 1 .854.353v11.586a.5.5 0 0 1-.854.353l-5.792-5.792a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class OcticonTriangleLeft24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
