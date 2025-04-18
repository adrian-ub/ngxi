import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsShrinkVerticalMoveVerticalShrinkIcon],svg[streamline-interface-arrows-shrink-vertical-move-vertical-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5L6.74 9a.37.37 0 0 1 .52 0l4.49 4.49M2.25.5L6.74 5a.37.37 0 0 0 .52 0L11.75.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsShrinkVerticalMoveVerticalShrinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
