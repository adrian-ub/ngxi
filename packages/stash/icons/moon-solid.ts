import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashMoonSolidIcon],svg[stash-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3c.575 0 .66.82.178 1.134a7 7 0 0 0 6.432 12.363c.479-.192 1.023.301.724.721A9 9 0 1 1 12 3" clip-rule="evenodd"></svg:path>`,
})
export class StashMoonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
