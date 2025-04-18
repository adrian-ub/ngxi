import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleLinearIcon],svg[solar-wineglass-triangle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 14.571l8.516-8.707C21.562 4.794 20.8 3 19.3 3H4.701C3.2 3 2.438 4.794 3.484 5.864zm0 0V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054"></svg:path>`,
})
export class SolarWineglassTriangleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
