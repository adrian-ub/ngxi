import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInboxStroke12Icon],svg[garden-inbox-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="9" height="11" x="1.5" y=".5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" d="M1.5 8.5h2V9a.49.49 0 0 0 .5.5h4a.49.49 0 0 0 .5-.5v-.5h2M4 2.5h4m-4 2h4m-4 2h4"></svg:path></svg:g>`,
})
export class GardenInboxStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
