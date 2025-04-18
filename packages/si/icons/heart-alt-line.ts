import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siHeartAltLineIcon],svg[si-heart-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654l-.86.854l-6.852 6.852L5.19 13.9l-.86-.854l-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654l.655-.654a5.45 5.45 0 0 1 3.852-1.595" clip-rule="evenodd"></svg:path>`,
})
export class SiHeartAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
