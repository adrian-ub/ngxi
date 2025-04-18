import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagEnglandIcon],svg[emojione-flag-england-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M38 2.6H26C14.3 5 5 14.2 2.6 26v12C5 49.8 14.3 59 26 61.4h12C49.8 59 59 49.7 61.4 38V26C59 14.2 49.7 5 38 2.6"></svg:path><svg:path fill="#CE1124" d="M61.179 39A30 30 0 0 0 62 32c0-2.41-.284-4.754-.821-7H39V2.821A30 30 0 0 0 32 2c-2.41 0-4.754.284-7 .821V25H2.821A30 30 0 0 0 2 32c0 2.41.284 4.754.821 7H25v22.179A30 30 0 0 0 32 62c2.41 0 4.754-.284 7-.821V39z"></svg:path></svg:g>`,
})
export class EmojioneFlagEnglandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
