import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCometIcon],svg[streamline-comet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5.5L2.025 7.025a3.5 3.5 0 0 0 4.95 4.95L13.5 5.5"></svg:path><svg:path d="M3 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5-2L11.5 4m-5 2L12 .5"></svg:path></svg:g>`,
})
export class StreamlineCometIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
