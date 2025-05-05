import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCursorIcon],svg[picon-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V0l5 5H3l1 2l-1 1l-1.5-2.5"></svg:path>`,
})
export class PiconCursorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
