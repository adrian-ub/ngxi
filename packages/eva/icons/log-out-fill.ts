import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaLogOutFillIcon],svg[eva-log-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6Zm13.82 5.42l-2.82-4a1 1 0 0 0-1.39-.24a1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4a1 1 0 0 0 .6.2a1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18"></svg:path>`,
})
export class EvaLogOutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
