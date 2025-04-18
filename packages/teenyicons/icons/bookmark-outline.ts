import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBookmarkOutlineIcon],svg[teenyicons-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 14.5l-.312.39A.5.5 0 0 0 13 14.5zm0-14h.5V0h-.5zm-10 0V0H2v.5zm0 14H2a.5.5 0 0 0 .812.39zm5-4l.312-.39a.5.5 0 0 0-.624 0zm5.5 4V.5h-1v14zM2 .5v14h1V.5zm.812 14.39l5-4l-.624-.78l-5 4zm4.376-4l5 4l.624-.78l-5-4zM12.5 0h-10v1h10z"></svg:path>`,
})
export class TeenyiconsBookmarkOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
