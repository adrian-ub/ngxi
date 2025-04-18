import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitShekelIcon],svg[formkit-shekel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15.5C3.86 15.5.5 12.14.5 8S3.86.5 8 .5s7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5m0-14C4.42 1.5 1.5 4.42 1.5 8s2.92 6.5 6.5 6.5s6.5-2.92 6.5-6.5S11.58 1.5 8 1.5"></svg:path><svg:path fill="currentColor" d="M5 12c-.28 0-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5h2a2.5 2.5 0 0 1 2.5 2.5v3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3C8.5 5.67 7.83 5 7 5H5.5v6.5c0 .28-.22.5-.5.5"></svg:path><svg:path fill="currentColor" d="M11 12H9a2.5 2.5 0 0 1-2.5-2.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .83.67 1.5 1.5 1.5h1.5V4.5c0-.28.22-.5.5-.5s.5.22.5.5v7c0 .28-.22.5-.5.5"></svg:path>`,
})
export class FormkitShekelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
