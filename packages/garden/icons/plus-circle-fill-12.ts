import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlusCircleFill12Icon],svg[garden-plus-circle-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 1C2.46 1 0 3.46 0 6.5S2.46 12 5.5 12S11 9.54 11 6.5S8.54 1 5.5 1m3 6H6v2.5c0 .28-.22.5-.5.5S5 9.78 5 9.5V7H2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H5V3.5c0-.28.22-.5.5-.5s.5.22.5.5V6h2.5c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class GardenPlusCircleFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
