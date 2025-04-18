import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRobotOutlineIcon],svg[teenyicons-robot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 2.5a5 5 0 0 1 5 5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a5 5 0 0 1 5-5Zm0 0V0M4 11.5h7M.5 8v4m14-4v4m-9-2.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path>`,
})
export class TeenyiconsRobotOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
