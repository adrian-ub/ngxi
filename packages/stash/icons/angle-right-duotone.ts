import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleRightDuotoneIcon],svg[stash-angle-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.164 8.964a.9.9 0 0 1 1.272 0l2.4 2.4a.9.9 0 0 1 0 1.272l-2.4 2.4a.9.9 0 1 1-1.272-1.272L11.927 12l-1.763-1.764a.9.9 0 0 1 0-1.272"></svg:path>`,
})
export class StashAngleRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
