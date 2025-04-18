import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciGridBigIcon],svg[ci-grid-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-6v-6h6v6Zm-8 0H5v-6h6v6Zm8-8h-6V5h6v6Zm-8 0H5V5h6v6Z"></svg:path>`,
})
export class CiGridBigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
