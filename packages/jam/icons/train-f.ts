import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTrainFIcon],svg[jam-train-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v5.038l12-.023V4a2 2 0 0 0-2-2zm7.667 15L11 16H5l-.667 1H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4zM4 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-11a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M4.314 17.029l7.371-.001l.279.417A1 1 0 0 1 11.13 19H4.87a1 1 0 0 1-.833-1.555z"></svg:path>`,
})
export class JamTrainFIcon {
  readonly viewBox = input("-4 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
