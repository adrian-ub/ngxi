import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronLeftFill16Icon],svg[garden-chevron-left-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.78 12.375a1 1 0 0 1-1.476 1.343l-.085-.093l-4-5a1 1 0 0 1-.072-1.147l.072-.103l4-5a1 1 0 0 1 1.634 1.147l-.072.103L7.28 8z"></svg:path>`,
})
export class GardenChevronLeftFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
