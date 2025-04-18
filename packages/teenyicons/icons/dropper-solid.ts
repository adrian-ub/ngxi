import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDropperSolidIcon],svg[teenyicons-dropper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.768 1.06a2.5 2.5 0 0 0-3.536 0L7.5 3.794l-.646-.647l-.708.708l5 5l.708-.708l-.647-.646l2.732-2.732a2.5 2.5 0 0 0 0-3.536zM6.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708L2.707 15H.5a.5.5 0 0 1-.5-.5v-2.207z"></svg:path>`,
})
export class TeenyiconsDropperSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
