import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAxesIcon],svg[iconoir-axes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 19.452l-9-6.61m0 0V3m0 9.843l-9 6.609m17.438-2.742L21 19.452L18.188 20M9.75 5.194L12 3l2.25 2.194M5.813 20L3 19.452l.563-2.742"></svg:path>`,
})
export class IconoirAxesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
