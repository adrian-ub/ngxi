import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMessageIncoming02Icon],svg[hugeicons-message-incoming-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.71 9.387q.196.763.25 1.575a20 20 0 0 1 0 2.522c-.274 4.246-3.606 7.628-7.79 7.906a33 33 0 0 1-4.34 0a4.9 4.9 0 0 1-1.486-.34c-.512-.21-.768-.316-.899-.3c-.13.016-.319.155-.696.434c-.666.491-1.505.845-2.75.814c-.629-.015-.943-.023-1.084-.263s.034-.573.385-1.238c.487-.923.795-1.98.328-2.826c-.805-1.209-1.488-2.64-1.588-4.187a20 20 0 0 1 0-2.522c.274-4.246 3.606-7.628 7.79-7.906A32 32 0 0 1 11 3m.995 9.5h.01m3.986 0H16m-8 0h.009"></svg:path><svg:path d="M14 4.5h8m-8 0c0-.7 1.994-2.008 2.5-2.5M14 4.5c0 .7 1.994 2.008 2.5 2.5"></svg:path></svg:g>`,
})
export class HugeiconsMessageIncoming02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
