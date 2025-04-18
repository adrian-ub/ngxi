import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisHDuotoneIcon],svg[stash-ellipsis-h-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 14.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5M5.75 12a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0M12 14.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5M11.25 12a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m5.5 0a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5" clip-rule="evenodd"></svg:path>`,
})
export class StashEllipsisHDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
