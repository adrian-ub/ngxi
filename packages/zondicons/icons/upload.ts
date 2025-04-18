import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsUploadIcon],svg[zondicons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10v6H7v-6H2l8-8l8 8zM0 18h20v2H0z"></svg:path>`,
})
export class ZondiconsUploadIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
