import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLinkTwoIcon],svg[mynaui-link-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 15.5h3.4c1.988 0 3.6-1.567 3.6-3.5s-1.612-3.5-3.6-3.5H14m-4 7l-3.397-.007c-1.987-.003-3.647-1.426-3.602-3.502S4.607 8.497 6.594 8.5l3.397.007M7.757 12h8.486"></svg:path>`,
})
export class MynauiLinkTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
