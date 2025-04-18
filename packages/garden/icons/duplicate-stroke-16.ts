import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDuplicateStroke16Icon],svg[garden-duplicate-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 9.5H1C.7 9.5.5 9.3.5 9V1C.5.7.7.5 1 .5h11c.3 0 .5.2.5.5v3.5m-9-1h6m-3 6h6m-6 3h6M4 6.5h11c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5z"></svg:path>`,
})
export class GardenDuplicateStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
