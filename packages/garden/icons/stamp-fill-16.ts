import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenStampFill16Icon],svg[garden-stamp-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5M5 3a3 3 0 1 1 4.96 2.271c-.125.414-.21.839-.21 1.229c0 .82.075 1.79.142 2.5H12a3 3 0 0 1 3 3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1a3 3 0 0 1 3-3h2.108c.067-.71.142-1.68.142-2.5c0-.39-.085-.815-.21-1.229A3 3 0 0 1 5 3"></svg:path>`,
})
export class GardenStampFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
