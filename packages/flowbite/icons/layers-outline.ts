import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteLayersOutlineIcon],svg[flowbite-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3L5.005 7.042l6.998 4.042L19 7.042z"></svg:path>`,
})
export class FlowbiteLayersOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
