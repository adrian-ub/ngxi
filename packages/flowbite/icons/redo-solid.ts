import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteRedoSolidIcon],svg[flowbite-redo-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M4 9h12a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H7"></svg:path><svg:path stroke-linejoin="round" d="M7 5L3 9l4 4"></svg:path></svg:g>`,
})
export class FlowbiteRedoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
