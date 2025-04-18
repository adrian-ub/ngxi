import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending24RegularIcon],svg[fluent-data-trending-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3.75a.75.75 0 0 0-1.5 0v14A3.25 3.25 0 0 0 6.25 21h14a.75.75 0 0 0 0-1.5h-14a1.75 1.75 0 0 1-1.75-1.75zM14.75 6a.75.75 0 0 0 0 1.5h3.19l-4.69 4.69l-1.97-1.97a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l3.22-3.22l1.97 1.97a.75.75 0 0 0 1.06 0l5.222-5.22v3.195a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentDataTrending24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
