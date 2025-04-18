import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsThumbtackSolidIcon],svg[teenyicons-thumbtack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.702 1.41L8.146.853l.708-.708l6 6l-.707.708l-.556-.556l-4.456 7.13l.719.718l-.708.708L5 10.707L.854 14.854l-.708-.707L4.293 10L.146 5.854l.708-.708l.718.72z"></svg:path>`,
})
export class TeenyiconsThumbtackSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
