import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailCloseLineIcon],svg[ri-mail-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h11v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zm16.903 14l2.121 2.121l-1.414 1.415L20 20.414l-2.121 2.121l-1.415-1.414L18.587 19l-2.121-2.121l1.414-1.415L20 17.587l2.121-2.121l1.415 1.414z"></svg:path>`,
})
export class RiMailCloseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
