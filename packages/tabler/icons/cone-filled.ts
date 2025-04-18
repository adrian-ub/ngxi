import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerConeFilledIcon],svg[tabler-cone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.001c.72 0 1.385.387 1.749 1.03l8.13 14.99a1 1 0 0 1 .121.477v.498c0 2.46-4.306 3.945-9.677 4.002L12 22c-5.52 0-10-1.495-10-4.003v-.5a1 1 0 0 1 .121-.477L10.26 2.015A2 2 0 0 1 12 1"></svg:path>`,
})
export class TablerConeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
