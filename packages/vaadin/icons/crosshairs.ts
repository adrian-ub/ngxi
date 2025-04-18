import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCrosshairsIcon],svg[vaadin-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0h1v4L8 6l-.5-2zm1 16h-1v-4l.5-2l.5 2zM16 7.5v1h-4L10 8l2-.5zm-16 1v-1h4L6 8l-2 .5z"></svg:path><svg:path fill="currentColor" d="M8 2.5a5.5 5.5 0 1 1 0 11A5.5 5.5 0 0 1 2.5 8a5.51 5.51 0 0 1 5.499-5.5zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1"></svg:path>`,
})
export class VaadinCrosshairsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
