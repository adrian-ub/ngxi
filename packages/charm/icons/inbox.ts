import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmInboxIcon],svg[charm-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 13.25h12.5v-5l-2.5-5.5h-7.5l-2.5 5.5z"></svg:path><svg:path d="M2.25 8.75h3l1 1.5h3.5l1-1.5h3"></svg:path></svg:g>`,
})
export class CharmInboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
