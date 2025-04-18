import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDirectionLtrStroke16Icon],svg[garden-direction-ltr-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M14.5 12.5H.5m12 3l2.6-2.6c.2-.2.2-.5 0-.7l-2.6-2.6m-6 .9V.5H8c.3 0 .5.2.5.5v9.5M6 .5C4.1.5 2.5 2.1 2.5 4S4.1 7.5 6 7.5"></svg:path>`,
})
export class GardenDirectionLtrStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
