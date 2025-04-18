import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTextAlignLeftIcon],svg[fe-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 7H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2m-4 4H5a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m4 4H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m-4 4H5a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class FeTextAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
