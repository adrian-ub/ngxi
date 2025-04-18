import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHFourFillIcon],svg[ph-text-h-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.46 144L184 119.13V144ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-96 32a8 8 0 0 0-16 0v32H72V80a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm84 72a8 8 0 0 0-8-8h-4V96a8 8 0 0 0-14.29-4.94l-44 56A8 8 0 0 0 148 160h36v16a8 8 0 0 0 16 0v-16h4a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhTextHFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
