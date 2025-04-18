import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherChevronsRightIcon],svg[feather-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 17l5-5l-5-5M6 17l5-5l-5-5"></svg:path>`,
})
export class FeatherChevronsRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
