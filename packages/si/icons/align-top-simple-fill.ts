import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignTopSimpleFillIcon],svg[si-align-top-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2a1 1 0 0 0 0 2h20a1 1 0 1 0 0-2zm8.6 5h2.8A1.6 1.6 0 0 1 15 8.6v11.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V8.6A1.6 1.6 0 0 1 10.6 7" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignTopSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
