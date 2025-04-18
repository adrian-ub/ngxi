import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDivideIcon],svg[stash-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-.75 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m-6 4.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m4.5 4.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class StashDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
