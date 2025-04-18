import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleFillIcon],svg[ph-eject-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M40.09 160h175.82a16.1 16.1 0 0 0 12.48-26.23L146.74 32.94a24.11 24.11 0 0 0-37.48 0L27.61 133.77A16.1 16.1 0 0 0 40.09 160"></svg:path>`,
})
export class PhEjectSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
