import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidBreadSliceIcon],svg[fa-solid-bread-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0C108 0 0 93.4 0 169.14C0 199.44 24.24 224 64 224v256c0 17.67 16.12 32 36 32h376c19.88 0 36-14.33 36-32V224c39.76 0 64-24.56 64-54.86C576 93.4 468 0 288 0"></svg:path>`,
})
export class FaSolidBreadSliceIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
