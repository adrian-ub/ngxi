import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteDotsHorizontalSolidIcon],svg[flowbite-dots-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h0m6 0h0m6 0h0"></svg:path>`,
})
export class FlowbiteDotsHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
