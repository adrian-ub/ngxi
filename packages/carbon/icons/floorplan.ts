import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFloorplanIcon],svg[carbon-floorplan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h15v-2c0-2.8 2.2-5 5-5v-2c-3.9 0-7 3.1-7 7h-3v-4h-2v4H4V4h8v14h2v-5h4v-2h-4V4h14v7h-4v2h4v15h-4v2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonFloorplanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
