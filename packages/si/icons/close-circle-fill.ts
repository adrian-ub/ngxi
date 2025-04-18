import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCloseCircleFillIcon],svg[si-close-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.05-4.95a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414L8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12L7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiCloseCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
