import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDummyCircleIcon],svg[ci-dummy-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class CiDummyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
