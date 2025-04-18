import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMessageSecure02Icon],svg[hugeicons-message-secure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.999 11.992c.005.5-.008 1.001-.04 1.492c-.273 4.246-3.605 7.628-7.788 7.906a33 33 0 0 1-4.342 0a4.9 4.9 0 0 1-1.485-.34c-.512-.21-.768-.316-.899-.3c-.13.016-.319.155-.696.434c-.666.491-1.505.845-2.75.814c-.629-.015-.943-.023-1.084-.263s.034-.573.385-1.238c.487-.923.795-1.98.328-2.826c-.805-1.209-1.488-2.64-1.588-4.187a20 20 0 0 1 0-2.522c.274-4.246 3.606-7.628 7.79-7.906A32 32 0 0 1 11 3"></svg:path><svg:path d="M18 2c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.208-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C20.088 2.808 19.266 2 18 2m-6.005 10.5h.01m3.986 0H16m-8 0h.009"></svg:path></svg:g>`,
})
export class HugeiconsMessageSecure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
