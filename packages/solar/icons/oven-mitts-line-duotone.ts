import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsLineDuotoneIcon],svg[solar-oven-mitts-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47c-.134.337-.43.659-1.02 1.301c-.58.63-.87 1.098-.87 1.634c0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0l-.962.94"></svg:path><svg:path d="M13.297 20.026L4.02 10.954" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOvenMittsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
