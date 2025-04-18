import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsTimeFiveIcon],svg[bxs-time-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m3.293 14.707L11 12.414V6h2v5.586l3.707 3.707z"></svg:path>`,
})
export class BxsTimeFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
