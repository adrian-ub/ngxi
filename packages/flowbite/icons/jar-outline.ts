import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteJarOutlineIcon],svg[flowbite-jar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6H8m8 0s3 2.5 3 5m-3-5V3H8v3m0 0s-3 2.5-3 5v8.002A3 3 0 0 0 8 22h8c1.657 0 3-1.341 3-2.998V11m0 0h-8v7h8zM6 6h12"></svg:path>`,
})
export class FlowbiteJarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
