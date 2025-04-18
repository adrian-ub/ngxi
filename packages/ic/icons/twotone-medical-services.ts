import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneMedicalServicesIcon],svg[ic-twotone-medical-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h16V8H4zm4-7h3v-3h2v3h3v2h-3v3h-2v-3H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M10 4h4v2h-4zm10 16H4V8h16z"></svg:path><svg:path fill="currentColor" d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3z"></svg:path>`,
})
export class IcTwotoneMedicalServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
