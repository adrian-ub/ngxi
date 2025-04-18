import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpamLineIcon],svg[ri-spam-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5zM11 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class RiSpamLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
