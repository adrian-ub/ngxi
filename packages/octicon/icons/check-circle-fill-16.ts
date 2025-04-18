import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCheckCircleFill16Icon],svg[octicon-check-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m3.78-9.72a.75.75 0 0 0-.018-1.042a.75.75 0 0 0-1.042-.018L6.75 9.19L5.28 7.72a.75.75 0 0 0-1.042.018a.75.75 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></svg:path>`,
})
export class OcticonCheckCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
