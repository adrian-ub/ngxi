import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnLineDuotoneIcon],svg[solar-flashlight-on-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 22v-4.343c0-.818 0-1.226-.152-1.594c-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h12c.943 0 1.414 0 1.707.293S20 9.057 20 10v.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-3.242 3.242c-.578.579-.867.867-1.02 1.235c-.152.368-.152.776-.152 1.594V22m0-6H9"></svg:path><svg:path d="M4.5 11h15M12 5V2" opacity=".5"></svg:path><svg:path d="M8 5L6 3m10 2l2-2"></svg:path><svg:path d="M12 19v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlashlightOnLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
