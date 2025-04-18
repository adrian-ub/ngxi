import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonModeDarkFillIcon],svg[iconamoon-mode-dark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.535 3.519a1 1 0 0 0-1.061-1.403C5.675 2.852 2 6.996 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10l-.004-.28a1 1 0 0 0-1.571-.793a6 6 0 0 1-8.89-7.409" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonModeDarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
