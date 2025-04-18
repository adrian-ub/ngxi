import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowSquareUpLeftIcon],svg[jam-arrow-square-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path d="m9.586 8.172l3.95 3.95a1 1 0 1 1-1.415 1.414l-3.95-3.95v3.586a1 1 0 0 1-2 0v-6a.997.997 0 0 1 1-1h6a1 1 0 1 1 0 2z"></svg:path></svg:g>`,
})
export class JamArrowSquareUpLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
