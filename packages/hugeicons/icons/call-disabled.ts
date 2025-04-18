import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCallDisabledIcon],svg[hugeicons-call-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.942 20.165c-1.653.979-3.003 1.451-4.37 1.736c-2.024.422-4.001-.543-5.263-2.14c-.533-.676-.35-1.45.343-1.85l1.567-.901c1.242-.715 1.862-1.072 2.52-1.001c.659.07 1.195.553 2.267 1.516zm0 0a22.6 22.6 0 0 0 4.558-3.601m3.665-4.616c.979-1.654 1.451-3.005 1.736-4.374c.422-2.025-.543-4.002-2.14-5.264c-.676-.534-1.45-.352-1.85.343L17.01 4.22c-.715 1.242-1.072 1.864-1.001 2.522c.07.659.553 1.195 1.516 2.268zm0 0a21.5 21.5 0 0 1-1.779 2.552M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsCallDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
