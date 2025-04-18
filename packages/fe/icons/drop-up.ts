import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDropUpIcon],svg[fe-drop-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 8l7 8H5z"></svg:path>`,
})
export class FeDropUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
