import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaiterIcon],svg[hugeicons-waiter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 22.002v-5.974c0-.95 0-1.423-.158-1.797a2 2 0 0 0-1.046-1.055c-.373-.162-.847-.166-1.796-.174c0 5-5 7-5 7s-5-2-5-7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 14.604 4 15.07 4 16.002v6"></svg:path><svg:path d="m12 13.5l2-1v2zm0 0l-2-1v2zm3.5-7v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0"></svg:path></svg:g>`,
})
export class HugeiconsWaiterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
