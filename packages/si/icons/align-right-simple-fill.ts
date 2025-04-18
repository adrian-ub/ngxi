import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignRightSimpleFillIcon],svg[si-align-right-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0zm-5 8.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h11.8a1.6 1.6 0 0 1 1.6 1.6" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignRightSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
