import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCommandOutlineIcon],svg[flowbite-command-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2zm0 8h8m-8 0H6a2 2 0 1 0 2 2zm8 0V8m0 8h2a2 2 0 1 1-2 2zm0-8h2a2 2 0 1 0-2-2z"></svg:path>`,
})
export class FlowbiteCommandOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
