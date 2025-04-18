import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDots20RegularIcon],svg[fluent-re-order-dots-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M7 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path><svg:path d="M7 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path><svg:path d="M8 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path><svg:path d="M13 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path><svg:path d="M14 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path><svg:path d="M13 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentReOrderDots20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
