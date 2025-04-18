import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMoonFill12Icon],svg[garden-moon-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a5 5 0 0 0 4.6-6.964a5 5 0 1 1-5.2 6.929Q1.697 8 2 8"></svg:path>`,
})
export class GardenMoonFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
