import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAccountBox2FillIcon],svg[ri-account-box-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005zM12 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 3a2 2 0 0 1 2 2h2a4 4 0 0 0-8 0h2a2 2 0 0 1 2-2"></svg:path>`,
})
export class RiAccountBox2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
