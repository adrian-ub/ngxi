import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingTwoIcon],svg[mynaui-heading-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11.939c0-3.252 5-3.252 5 0c0 2.873-5 5.007-5 7.561h5M3.75 4.5v15m9.5-15v15M3.75 12h9.5"></svg:path>`,
})
export class MynauiHeadingTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
