import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDropLeftIcon],svg[fe-drop-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16 5l-8 7l8 7z"></svg:path>`,
})
export class FeDropLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
