import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpIcon],svg[jam-arrow-square-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="M11 8.414V14a1 1 0 0 1-2 0V8.414L6.464 10.95A1 1 0 1 1 5.05 9.536l4.243-4.243a.997.997 0 0 1 1.414 0l4.243 4.243a1 1 0 1 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class JamArrowSquareUpIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
