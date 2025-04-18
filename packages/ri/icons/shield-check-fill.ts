import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShieldCheckFillIcon],svg[ri-shield-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zm4.452 7.222l-4.95 4.949l-2.828-2.828l-1.414 1.414L11.503 16l6.364-6.364z"></svg:path>`,
})
export class RiShieldCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
