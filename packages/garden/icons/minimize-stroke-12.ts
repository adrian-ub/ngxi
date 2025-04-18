import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMinimizeStroke12Icon],svg[garden-minimize-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M8.5 11.5V9c0-.3.2-.5.5-.5h2.5m-8 3V9c0-.3-.2-.5-.5-.5H.5m3-8V3c0 .3-.2.5-.5.5H.5m8-3V3c0 .3.2.5.5.5h2.5M.5.5L3 3M11.5.5L9 3M.5 11.5L3 9m8.5 2.5L9 9"></svg:path>`,
})
export class GardenMinimizeStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
