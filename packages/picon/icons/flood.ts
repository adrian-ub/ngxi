import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFloodIcon],svg[picon-flood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3l2-2l2 2M2 7L0 8V7l2-1l2 1l2-1l2 1v1L6 7L4 8M2 5L0 6V5l2-1l2 1l2-1l2 1v1L6 5L4 6"></svg:path>`,
})
export class PiconFloodIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
