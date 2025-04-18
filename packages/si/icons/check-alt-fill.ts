import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCheckAltFillIcon],svg[si-check-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.47 4.118a1 1 0 0 1 .412 1.353l-8 15a1 1 0 0 1-1.59.236l-6-6a1 1 0 1 1 1.415-1.414l5.046 5.046l7.365-13.81a1 1 0 0 1 1.353-.411" clip-rule="evenodd"></svg:path>`,
})
export class SiCheckAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
