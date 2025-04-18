import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignVertCenterSimpleFillIcon],svg[si-align-vert-center-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12a1 1 0 0 1 1-1h7V4.6A1.6 1.6 0 0 1 10.6 3h2.8A1.6 1.6 0 0 1 15 4.6V11h7a1 1 0 1 1 0 2h-7v6.4a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 19.4V13H2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiAlignVertCenterSimpleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
