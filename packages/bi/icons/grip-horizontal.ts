import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biGripHorizontalIcon],svg[bi-grip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class BiGripHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
