import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaDoneAllOutlineIcon],svg[eva-done-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9l-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37a1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41m5 0a1 1 0 0 0-1.41.17l-7 9l-.61-.75l-1.26 1.62l1.1 1.37a1 1 0 0 0 .78.37a1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4"></svg:path><svg:path fill="currentColor" d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2a1 1 0 0 0-.15 1.41Z"></svg:path>`,
})
export class EvaDoneAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
