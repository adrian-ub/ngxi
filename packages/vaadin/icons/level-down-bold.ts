import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLevelDownBoldIcon],svg[vaadin-level-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 16l4-7h-3V0H3l2 3h2v6H4z"></svg:path>`,
})
export class VaadinLevelDownBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
