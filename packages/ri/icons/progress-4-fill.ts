import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProgress4FillIcon],svg[ri-progress-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6-10a6 6 0 0 1-6 6V6a6 6 0 0 1 6 6"></svg:path>`,
})
export class RiProgress4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
