import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNumberFill16Icon],svg[garden-number-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2.5 5.5h12m-13 5h12m-1.5-9l-3 13m-2-13l-3 13"></svg:path>`,
})
export class GardenNumberFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
