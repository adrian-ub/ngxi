import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleUpDuotoneIcon],svg[stash-angle-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.364 10.164a.9.9 0 0 1 1.273 0l2.4 2.4a.9.9 0 1 1-1.273 1.272L12 12.073l-1.763 1.763a.9.9 0 1 1-1.273-1.272z"></svg:path>`,
})
export class StashAngleUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
