import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowShrinkDiagonal1SolidIcon],svg[streamline-arrow-shrink-diagonal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.707 1.707A1 1 0 0 0 12.293.293l-2.147 2.146l-1.292-1.293A.5.5 0 0 0 8 1.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .354-.854L11.56 3.854l2.146-2.147Zm-8.56 11.147L3.853 11.56l-2.147 2.146a1 1 0 0 1-1.414-1.414l2.146-2.147l-1.293-1.292A.5.5 0 0 1 1.5 8h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.854.354Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowShrinkDiagonal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
