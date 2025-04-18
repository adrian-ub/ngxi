import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMessageFavourite02Icon],svg[hugeicons-message-favourite-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.96 10.97a19.5 19.5 0 0 1 0 2.521c-.274 4.242-3.606 7.622-7.79 7.9a33 33 0 0 1-4.34 0a4.9 4.9 0 0 1-1.486-.34c-.512-.21-.768-.316-.899-.3c-.13.016-.319.155-.696.434c-.666.49-1.505.844-2.75.813c-.629-.015-.943-.023-1.084-.263s.034-.572.385-1.237c.487-.922.795-1.978.328-2.823c-.805-1.208-1.488-2.639-1.588-4.184a20 20 0 0 1 0-2.52c.274-4.242 3.606-7.622 7.79-7.9c.549-.036.608-.059 1.17-.067m.995 9.496h.01m3.986 0H16m-8 0h.009"></svg:path><svg:path d="M15.015 2.387c1.073-.64 2.009-.382 2.571.028c.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028c1.408.84 1.726 3.609-1.52 5.945c-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945"></svg:path></svg:g>`,
})
export class HugeiconsMessageFavourite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
