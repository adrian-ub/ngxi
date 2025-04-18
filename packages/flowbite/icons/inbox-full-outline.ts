import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteInboxFullOutlineIcon],svg[flowbite-inbox-full-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.99.99 0 0 1 .908.6a3.978 3.978 0 0 0 7.306 0a.99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"></svg:path>`,
})
export class FlowbiteInboxFullOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
