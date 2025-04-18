import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashStopwatchSolidIcon],svg[stash-stopwatch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 1.75a.75.75 0 0 0 0 1.5h.75v1.532a8.75 8.75 0 1 0 7.445 3.084l.835-.835a.75.75 0 0 0-1.06-1.061l-.836.835a8.7 8.7 0 0 0-4.884-2.023V3.25h.75a.75.75 0 0 0 0-1.5zM9.125 8.52A5.75 5.75 0 0 1 12 7.75v5.75l4.98 2.875A5.749 5.749 0 1 1 9.125 8.52" clip-rule="evenodd"></svg:path>`,
})
export class StashStopwatchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
