import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRemixRunLineIcon],svg[ri-remix-run-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h10.5a6 6 0 0 1 3.054 11.166A6 6 0 0 1 20 18v3h-2v-3a4 4 0 0 0-4-4H4v-2h10.5a4 4 0 0 0 0-8H4zm7 19H4v-2h7z"></svg:path>`,
})
export class RiRemixRunLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
