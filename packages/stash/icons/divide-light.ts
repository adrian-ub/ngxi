import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDivideLightIcon],svg[stash-divide-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0M5.5 12a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m4.5 4.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class StashDivideLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
