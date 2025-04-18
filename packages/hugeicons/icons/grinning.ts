import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGrinningIcon],svg[hugeicons-grinning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.8 10q.198.97.2 2c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2c1.231 0 2.41.223 3.5.63"></svg:path><svg:path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2m3.518-13l-1.801 1.785a2.48 2.48 0 0 0 .017 3.504a2.53 2.53 0 0 0 3.534-.016a2.464 2.464 0 0 0 0-3.504zM8 9c.423.317 1.192.71 1.29 1.341q.008.056.01.11c.024.43-.286.803-.905 1.549M16 9c-.423.317-1.192.71-1.29 1.341q-.008.056-.01.11c-.024.43.286.803.905 1.549"></svg:path></svg:g>`,
})
export class HugeiconsGrinningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
