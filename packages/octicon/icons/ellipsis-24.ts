import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconEllipsis24Icon],svg[octicon-ellipsis-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.75v5.5A1.75 1.75 0 0 1 20.25 17H3.75A1.75 1.75 0 0 1 2 15.25v-5.5C2 8.784 2.784 8 3.75 8h16.5c.966 0 1.75.784 1.75 1.75m-8.75 2.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m-6.5 1.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m10.5 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class OcticonEllipsis24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
