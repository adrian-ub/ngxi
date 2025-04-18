import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTrashBinMinimalistic2LineDuotoneIcon],svg[solar-trash-bin-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79s-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9"></svg:path><svg:path d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTrashBinMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
