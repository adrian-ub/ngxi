import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDirectionLtrStroke12Icon],svg[garden-direction-ltr-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M6.5 7.5V1c0-.3-.2-.5-.5-.5H4.5v7m5 4l1.6-1.6c.2-.2.2-.5 0-.7L9.5 7.5M4 .5c-1.1 0-2 .9-2 2s.9 2 2 2m6.5 5H.5"></svg:path>`,
})
export class GardenDirectionLtrStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
