import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHomeFillIcon],svg[ci-home-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.293 10.707l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1h-5v-7h-4v7H5a1 1 0 0 1-1-1v-9.586a1 1 0 0 1 .293-.707Z"></svg:path>`,
})
export class CiHomeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
