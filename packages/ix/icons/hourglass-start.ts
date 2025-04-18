import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHourglassStartIcon],svg[ix-hourglass-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 469.333h256V342.499L287.89 256L384 169.501V42.667H128V169.5l96.11 86.5L128 342.499zm42.667-107.832l85.333-76.8l85.333 76.8v65.166H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxHourglassStartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
