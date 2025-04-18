import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDuplicateStroke12Icon],svg[garden-duplicate-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 6.5H1C.7 6.5.5 6.3.5 6V1C.5.7.7.5 1 .5h7c.3 0 .5.2.5.5v2.5m-6-1h4m-1 5h4m-4 2h4M4 5.5h7c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5z"></svg:path>`,
})
export class GardenDuplicateStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
