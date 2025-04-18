import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMessagesIcon],svg[charm-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.25 14.25v-9h-9.5v6h6z"></svg:path><svg:path d="m4.75 7.25l-3 3v-8.5h10v3"></svg:path></svg:g>`,
})
export class CharmMessagesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
