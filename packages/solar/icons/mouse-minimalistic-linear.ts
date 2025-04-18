import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticLinearIcon],svg[solar-mouse-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></svg:path><svg:path stroke-linecap="round" d="M12 5v3"></svg:path></svg:g>`,
})
export class SolarMouseMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
