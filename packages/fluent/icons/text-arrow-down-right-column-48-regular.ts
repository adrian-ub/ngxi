import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextArrowDownRightColumn48RegularIcon],svg[fluent-text-arrow-down-right-column-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 5a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5zm0 7.5a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zm26-4.5A4.25 4.25 0 0 0 27 12.25v26.5A4.25 4.25 0 0 0 31.25 43h6.5A4.25 4.25 0 0 0 42 38.75v-26.5A4.25 4.25 0 0 0 37.75 8zm-1.75 4.25c0-.966.784-1.75 1.75-1.75h6.5c.967 0 1.75.784 1.75 1.75V19h-10zm0 9.25h10v8h-10zm0 10.5h10v6.75a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75zm-21-10.75a1.25 1.25 0 1 0-2.5 0v4.5A6.25 6.25 0 0 0 12.25 32h5.482l-3.366 3.366a1.25 1.25 0 0 0 1.768 1.768l5.5-5.5a1.25 1.25 0 0 0 0-1.768l-5.5-5.5a1.25 1.25 0 0 0-1.768 1.768l3.366 3.366H12.25a3.75 3.75 0 0 1-3.75-3.75z"></svg:path>`,
})
export class FluentTextArrowDownRightColumn48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
