import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiSlidersIcon],svg[gravity-ui-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.405.75a3.001 3.001 0 0 1-5.81 0H1.747a.75.75 0 0 1 0-1.5h1.348a3.001 3.001 0 0 1 5.81 0h5.345a.75.75 0 0 1 0 1.5zm-7.158 4.5h5.345a3.001 3.001 0 0 1 5.811 0h1.347a.75.75 0 1 1 0 1.5h-1.347a3.001 3.001 0 0 1-5.81 0H1.746a.75.75 0 0 1 0-1.5m8.25-.75a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSlidersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
