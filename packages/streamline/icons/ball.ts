import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBallIcon],svg[streamline-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-13v13"></svg:path><svg:path d="M2.1 11.27a5 5 0 0 0 0-8.54m9.8 0a5 5 0 0 0 0 8.54"></svg:path></svg:g>`,
})
export class StreamlineBallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
