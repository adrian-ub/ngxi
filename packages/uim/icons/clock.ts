import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimClockIcon],svg[uim-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m9-5a1 1 0 0 1 2 0v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1 1 0 0 1 11 12Z" opacity=".5"></svg:path>`,
})
export class UimClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
