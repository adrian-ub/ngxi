import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDropRightIcon],svg[fe-drop-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 5v14l8-7z"></svg:path>`,
})
export class FeDropRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
