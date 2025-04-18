import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMoonFill16Icon],svg[garden-moon-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a7 7 0 0 0 6.773-8.773a7 7 0 1 1-8.547 8.547A7 7 0 0 0 3 10"></svg:path>`,
})
export class GardenMoonFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
