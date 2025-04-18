import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTestTubeMinimalisticLineDuotoneIcon],svg[solar-test-tube-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 9.849L14.182 3m.681.685l5.376 5.399L13 16.354l-3.512 3.528a3.79 3.79 0 0 1-5.375 0a3.83 3.83 0 0 1 0-5.4z"></svg:path><svg:path d="m6.8 11.783l1.275.142a2.205 2.205 0 0 1 1.944 1.953a2.21 2.21 0 0 0 1.32 1.787l1.661.69" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTestTubeMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
