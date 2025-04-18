import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDivideSolidIcon],svg[mynaui-divide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M12 4.25a.75.75 0 0 1 .75.75v.744a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 13.256a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-.744a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiDivideSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
