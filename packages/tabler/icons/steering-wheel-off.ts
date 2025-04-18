import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSteeringWheelOffIcon],svg[tabler-steering-wheel-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.04 16.048A9 9 0 0 0 7.957 3.958m-2.32 1.678a9 9 0 1 0 12.737 12.719"></svg:path><svg:path d="M10.595 10.576a2 2 0 1 0 2.827 2.83M12 14v7m-2-9l-6.75-2m12.292 1.543L20.75 10M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerSteeringWheelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
