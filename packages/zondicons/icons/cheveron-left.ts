import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCheveronLeftIcon],svg[zondicons-cheveron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 9.293L6.343 10L12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"></svg:path>`,
})
export class ZondiconsCheveronLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
