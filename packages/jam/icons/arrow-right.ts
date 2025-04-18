import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowRightIcon],svg[jam-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2z"></svg:path>`,
})
export class JamArrowRightIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
