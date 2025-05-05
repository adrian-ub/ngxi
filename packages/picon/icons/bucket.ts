import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBucketIcon],svg[picon-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h6L6 8H2M0 4c0-5.33 8-5.33 8 0H7c0-4-6-4-6 0"></svg:path>`,
})
export class PiconBucketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
