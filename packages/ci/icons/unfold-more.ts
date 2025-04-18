import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciUnfoldMoreIcon],svg[ci-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 15l-4 4l-4-4m0-6l4-4l4 4"></svg:path>`,
})
export class CiUnfoldMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
