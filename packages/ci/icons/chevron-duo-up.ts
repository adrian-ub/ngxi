import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoUpIcon],svg[ci-chevron-duo-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.403 18.425L5.99 17.01L12 10.999l6.01 6.011l-1.413 1.413l-4.6-4.6l-4.6 4.6l.006.002Zm0-5.424L5.99 11.585L12 5.575l6.01 6.01l-1.413 1.414l-4.6-4.6l-4.6 4.6l.006.002Z"></svg:path>`,
})
export class CiChevronDuoUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
