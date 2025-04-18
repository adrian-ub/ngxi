import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSteeringWheelIcon],svg[tabler-steering-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2v7m-2-9l-6.75-2M14 12l6.75-2"></svg:path></svg:g>`,
})
export class TablerSteeringWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
