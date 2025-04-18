import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignBottomSimpleFillIcon],svg[si-align-bottom-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 22a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2zm8.6-5h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v11.8a1.6 1.6 0 0 0 1.6 1.6" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignBottomSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
