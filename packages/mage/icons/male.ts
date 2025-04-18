import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMaleIcon],svg[mage-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.98 20.75a6.73 6.73 0 1 0 0-13.461a6.73 6.73 0 0 0 0 13.461m10.77-17.5l-6.004 6.004m6.004-.619V3.25h-5.385"></svg:path>`,
})
export class MageMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
