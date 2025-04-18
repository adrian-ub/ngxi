import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsRewindIcon],svg[humbleicons-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.113 15.196V8.804a1 1 0 0 0-1.53-.848l-5.113 3.196a1 1 0 0 0 0 1.696l5.113 3.196a1 1 0 0 0 1.53-.848m-8 0V8.804a1 1 0 0 0-1.53-.848L4.47 11.152a1 1 0 0 0 0 1.696l5.113 3.196a1 1 0 0 0 1.53-.848"></svg:path>`,
})
export class HumbleiconsRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
