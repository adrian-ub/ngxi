import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSkipNextIcon],svg[ci-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18h-2V6h2v12ZM6 18V6l8.5 6L6 18Z"></svg:path>`,
})
export class CiSkipNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
