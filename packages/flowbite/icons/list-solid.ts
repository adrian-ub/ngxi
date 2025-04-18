import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteListSolidIcon],svg[flowbite-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 8c0-.6.4-1 1-1a1 1 0 1 1 0 2a1 1 0 0 1-1-1m4 0c0-.6.4-1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m-4 4c0-.6.4-1 1-1a1 1 0 1 1 0 2a1 1 0 0 1-1-1m4 0c0-.6.4-1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m-4 4c0-.6.4-1 1-1a1 1 0 1 1 0 2a1 1 0 0 1-1-1m4 0c0-.6.4-1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
