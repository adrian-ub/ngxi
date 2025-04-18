import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phImagesFillIcon],svg[ph-images-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-44 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 128H40V88h16v80a16 16 0 0 0 16 16h112Zm32-32H72v-47.31l30.34-30.35a8 8 0 0 1 11.32 0L163.31 140L189 114.34a8 8 0 0 1 11.31 0L216 130.07z"></svg:path>`,
})
export class PhImagesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
