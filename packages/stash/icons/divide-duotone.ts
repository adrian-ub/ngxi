import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDivideDuotoneIcon],svg[stash-divide-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.5 2.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m4.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M12 16a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class StashDivideDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
