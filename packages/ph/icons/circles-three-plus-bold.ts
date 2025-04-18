import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusBoldIcon],svg[ph-circles-three-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 36a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m100 24a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-60a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m142-18a12 12 0 0 1-12 12h-18v18a12 12 0 0 1-24 0v-18h-18a12 12 0 0 1 0-24h18v-18a12 12 0 0 1 24 0v18h18a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCirclesThreePlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
