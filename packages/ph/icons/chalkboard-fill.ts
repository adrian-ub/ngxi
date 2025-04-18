import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChalkboardFillIcon],svg[ph-chalkboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Zm0-48a8 8 0 0 1-16 0V72H56v112a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhChalkboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
