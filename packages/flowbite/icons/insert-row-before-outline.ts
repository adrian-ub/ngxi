import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteInsertRowBeforeOutlineIcon],svg[flowbite-insert-row-before-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3M3 15V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-6-9h2m0 0h2m-2 0v2m0-2V8"></svg:path>`,
})
export class FlowbiteInsertRowBeforeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
