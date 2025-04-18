import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRobotSolidIcon],svg[teenyicons-robot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m4 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.022A5.5 5.5 0 0 1 13 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 13.5v-6a5.5 5.5 0 0 1 5-5.478V0h1zM5.5 7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m4 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m1.5 5H4v-1h7z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M0 8v4h1V8zm15 0h-1v4h1z"></svg:path>`,
})
export class TeenyiconsRobotSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
