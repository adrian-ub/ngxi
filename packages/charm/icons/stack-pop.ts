import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmStackPopIcon],svg[charm-stack-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 6.75L1.75 8L8 11.25L14.25 8l-2.5-1.25M1.75 11L8 14.25L14.25 11M8 8.25v-6.5m-2.25 2l2.25-2l2.25 2"></svg:path>`,
})
export class CharmStackPopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
