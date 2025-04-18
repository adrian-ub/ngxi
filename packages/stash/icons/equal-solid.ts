import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashEqualSolidIcon],svg[stash-equal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 10c0-.69.56-1.25 1.25-1.25h10a1.25 1.25 0 1 1 0 2.5H7c-.69 0-1.25-.56-1.25-1.25m0 4c0-.69.56-1.25 1.25-1.25h10a1.25 1.25 0 1 1 0 2.5H7c-.69 0-1.25-.56-1.25-1.25"></svg:path>`,
})
export class StashEqualSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
