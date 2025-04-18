import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMugHotIcon],svg[la-mug-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v4h2V2zm4 1v3h2V3zM6 7v18c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3v-5h2c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-2V7zm2 2h14v16c0 .555-.445 1-1 1H9c-.555 0-1-.445-1-1zm16 4h2c.555 0 1 .445 1 1v3c0 .555-.445 1-1 1h-2z"></svg:path>`,
})
export class LaMugHotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
