import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExpandDownFilledIcon],svg[tdesign-expand-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v13h20zm-5.5 5L12 11.5L7.5 7zM22 22v-5H2v5z"></svg:path>`,
})
export class TdesignExpandDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
