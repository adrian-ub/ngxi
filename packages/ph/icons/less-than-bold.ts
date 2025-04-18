import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLessThanBoldIcon],svg[ph-less-than-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.84 205.13a12 12 0 0 1-16 5.71l-152-72a12 12 0 0 1 0-21.68l152-72a12 12 0 1 1 10.27 21.69L76 128l129.1 61.15a12 12 0 0 1 5.74 15.98"></svg:path>`,
})
export class PhLessThanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
