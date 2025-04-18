import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSouthEastCircleFillIcon],svg[si-south-east-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.707 7.293a1 1 0 0 0-1.414 1.414L13.586 15H11a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v2.586z" clip-rule="evenodd"></svg:path>`,
})
export class SiSouthEastCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
