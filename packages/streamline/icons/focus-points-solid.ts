import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFocusPointsSolidIcon],svg[streamline-focus-points-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.542 1.497c.32-.32.753-.5 1.205-.5h.955a.75.75 0 0 1 0 1.5h-.955a.205.205 0 0 0-.205.205v.955a.75.75 0 0 1-1.5 0v-.955c0-.452.18-.886.5-1.205m10.006.25a.75.75 0 0 1 .75-.75h.955a1.705 1.705 0 0 1 1.705 1.705v.955a.75.75 0 0 1-1.5 0v-.955a.205.205 0 0 0-.205-.205h-.955a.75.75 0 0 1-.75-.75m3.41 8.596a.75.75 0 1 0-1.5 0v.955a.205.205 0 0 1-.205.205h-.955a.75.75 0 0 0 0 1.5h.955a1.705 1.705 0 0 0 1.705-1.705zM.792 9.593a.75.75 0 0 1 .75.75v.955a.205.205 0 0 0 .205.205h.955a.75.75 0 0 1 0 1.5h-.955a1.705 1.705 0 0 1-1.705-1.705v-.955a.75.75 0 0 1 .75-.75M6 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0M3 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFocusPointsSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
