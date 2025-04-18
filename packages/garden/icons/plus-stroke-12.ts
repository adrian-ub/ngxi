import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlusStroke12Icon],svg[garden-plus-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M5.5 2.5v8m4-4h-8"></svg:path>`,
})
export class GardenPlusStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
