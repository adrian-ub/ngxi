import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextColorAccentIcon],svg[proicons-text-color-accent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 18.397a1.5 1.5 0 0 1 1.5-1.5h12.5a1.5 1.5 0 0 1 1.5 1.5v1.353a1.5 1.5 0 0 1-1.5 1.5H5.75a1.5 1.5 0 0 1-1.5-1.5z"></svg:path>`,
})
export class ProiconsTextColorAccentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
