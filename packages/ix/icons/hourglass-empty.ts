import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHourglassEmptyIcon],svg[ix-hourglass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 42.667h256V169.5L287.89 256L384 342.499v126.834H128V342.499L224.11 256L128 169.501zm128 184.632l85.333-76.8V85.333H170.667V150.5zm0 57.402l-85.333 76.8v65.166h170.666v-65.166z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
