import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftBoldIcon],svg[ph-toggle-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 52H80a76 76 0 0 0 0 152h96a76 76 0 0 0 0-152m0 128H80a52 52 0 0 1 0-104h96a52 52 0 0 1 0 104M80 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhToggleLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
