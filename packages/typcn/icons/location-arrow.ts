import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnLocationArrowIcon],svg[typcn-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.034-1.434-.967-.967L4.812 12.154c-1.001.467-.963 1.129.085 1.479L9 15z"></svg:path>`,
})
export class TypcnLocationArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
