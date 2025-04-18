import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmRobotIcon],svg[charm-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 5.75h12.5v7.5H1.75z"></svg:path><svg:path d="M10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5l3.25 3l3.25-3"></svg:path></svg:g>`,
})
export class CharmRobotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
