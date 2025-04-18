import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightDuotoneIcon],svg[stash-arrow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6a.75.75 0 0 1 0-1.5h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class StashArrowRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
