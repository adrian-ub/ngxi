import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBugIcon],svg[streamline-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 12.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M2.5 8h-2m0 3.5a3.46 3.46 0 0 0 2.63-1.2"></svg:path><svg:path d="M3.13 5.7A3.46 3.46 0 0 0 .5 4.5m11 3.5h2m0 3.5a3.46 3.46 0 0 1-2.63-1.2m0-4.6a3.46 3.46 0 0 1 2.63-1.2m-5.26-.83A2.5 2.5 0 0 0 9.5 1.5m-5 0a2.5 2.5 0 0 0 1.26 2.17M2.61 7h8.78"></svg:path></svg:g>`,
})
export class StreamlineBugIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
