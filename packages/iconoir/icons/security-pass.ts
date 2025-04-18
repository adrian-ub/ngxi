import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSecurityPassIcon],svg[iconoir-security-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9 11l3 3l8-8"></svg:path><svg:path d="M20 12a8 8 0 1 1-5.3-7.533"></svg:path></svg:g>`,
})
export class IconoirSecurityPassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
