import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsWatchSolidIcon],svg[teenyicons-watch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.085V1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5v1.585A1.5 1.5 0 0 1 12 4.5v6a1.5 1.5 0 0 1-1 1.415V13.5A1.5 1.5 0 0 1 9.5 15h-4A1.5 1.5 0 0 1 4 13.5v-1.585A1.5 1.5 0 0 1 3 10.5v-6a1.5 1.5 0 0 1 1-1.415M5 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3H5zM5 12h5v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 6v3h1V6z"></svg:path>`,
})
export class TeenyiconsWatchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
