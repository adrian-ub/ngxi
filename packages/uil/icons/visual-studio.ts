import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilVisualStudioIcon],svg[uil-visual-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.85 2L9.09 9.77l-4.9-3.86L2.05 7v10l2.15 1.09l4.93-3.85L16.87 22L22 19.93V4ZM4.37 14.3V9.65l2.44 2.43Zm12.33 1.29L12.05 12l4.65-3.59Z"></svg:path>`,
})
export class UilVisualStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
