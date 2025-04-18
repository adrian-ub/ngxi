import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTicketAltIcon],svg[la-ticket-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v7h1c1.191 0 2 .809 2 2s-.809 2-2 2H2v7h28v-7h-1c-1.191 0-2-.809-2-2s.809-2 2-2h1V7zm2 2h24v3.188c-1.715.449-3 1.957-3 3.812s1.285 3.363 3 3.813V23H4v-3.188c1.715-.449 3-1.957 3-3.812s-1.285-3.363-3-3.813z"></svg:path>`,
})
export class LaTicketAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
