import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLaptopIcon],svg[carbon-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 24.005H6a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v14a2.003 2.003 0 0 1-2 2m-20-16v14h20v-14Zm-4 18h28v2H2z"></svg:path>`,
})
export class CarbonLaptopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
