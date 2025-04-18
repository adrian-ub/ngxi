import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabAdd32RegularIcon],svg[fluent-tab-add-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v8.792a9 9 0 0 0-2-1.357V7.5A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h7.435c.362.728.82 1.4 1.357 2H7.5A4.5 4.5 0 0 1 3 24.5zm20 23a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentTabAdd32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
