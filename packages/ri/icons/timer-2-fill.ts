import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTimer2FillIcon],svg[ri-timer-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m3.536 5.05L10.586 12L12 13.414l4.95-4.95z"></svg:path>`,
})
export class RiTimer2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
