import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDivideSolidIcon],svg[stash-divide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.5 2.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M4.75 12c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25m4.75 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M12 16a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class StashDivideSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
