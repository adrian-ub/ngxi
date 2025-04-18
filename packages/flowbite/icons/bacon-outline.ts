import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBaconOutlineIcon],svg[flowbite-bacon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7.426 18.244c1.317-2.202 2.533-1.524 3.85-3.726s.1-2.88 1.417-5.083c1.317-2.202 2.534-1.524 3.85-3.727m-5.696 14.444c1.317-2.203 2.534-1.524 3.85-3.727s.1-2.88 1.418-5.083c1.317-2.202 2.533-1.524 3.85-3.726L13.122 3.8c-1.317 2.203-2.533 1.524-3.85 3.727s-.1 2.88-1.417 5.083c-1.317 2.202-2.534 1.524-3.85 3.726z"></svg:path>`,
})
export class FlowbiteBaconOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
