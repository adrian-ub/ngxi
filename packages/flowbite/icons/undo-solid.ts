import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteUndoSolidIcon],svg[flowbite-undo-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M20 9H8a5 5 0 0 0-5 5v0a5 5 0 0 0 5 5h9"></svg:path><svg:path stroke-linejoin="round" d="m17 5l4 4l-4 4"></svg:path></svg:g>`,
})
export class FlowbiteUndoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
