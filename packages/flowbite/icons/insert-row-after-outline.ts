import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteInsertRowAfterOutlineIcon],svg[flowbite-insert-row-after-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3M3 9v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9M3 9h18M8 9V5m4 4V5m4 4V5m-6 9h2m0 0h2m-2 0v-2m0 2v2"></svg:path>`,
})
export class FlowbiteInsertRowAfterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
