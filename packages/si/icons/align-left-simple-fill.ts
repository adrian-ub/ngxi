import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignLeftSimpleFillIcon],svg[si-align-left-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2a1 1 0 0 1 2 0v20a1 1 0 1 1-2 0zm5 8.6v2.8A1.6 1.6 0 0 0 8.6 15h11.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 20.4 9H8.6A1.6 1.6 0 0 0 7 10.6" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignLeftSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
