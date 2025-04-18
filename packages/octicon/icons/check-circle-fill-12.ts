import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCheckCircleFill12Icon],svg[octicon-check-circle-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m-.705 8.737L9.63 4.403L8.392 3.166L5.295 6.263l-1.7-1.702L2.356 5.8z"></svg:path>`,
})
export class OcticonCheckCircleFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
