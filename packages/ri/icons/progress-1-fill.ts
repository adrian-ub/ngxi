import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProgress1FillIcon],svg[ri-progress-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-10V6a5.98 5.98 0 0 1 4.243 1.757z"></svg:path>`,
})
export class RiProgress1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
