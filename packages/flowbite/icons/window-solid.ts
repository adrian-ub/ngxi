import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWindowSolidIcon],svg[flowbite-window-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm16 7H4v7h16zM5 8a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m4-1a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2zm2 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteWindowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
