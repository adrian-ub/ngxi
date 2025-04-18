import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalIcon],svg[ph-faders-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8M40 88h104v16a8 8 0 0 0 16 0V56a8 8 0 0 0-16 0v16H40a8 8 0 0 0 0 16m176 80h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16M88 144a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h40v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFadersHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
