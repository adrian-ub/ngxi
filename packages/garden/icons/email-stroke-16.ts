import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEmailStroke16Icon],svg[garden-email-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 1.707l-6.285 6.295a1 1 0 0 1-1.419.002L1 3.707v8.585l3.146-3.146a.5.5 0 1 1 .708.708L1.706 13h12.587l-3.147-3.146a.5.5 0 0 1 .708-.708L15 12.293zM14.292 3H1.707l6.298 6.298z"></svg:path>`,
})
export class GardenEmailStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
