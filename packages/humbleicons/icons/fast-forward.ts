import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsFastForwardIcon],svg[humbleicons-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15.196V8.804a1 1 0 0 1 1.53-.848l5.113 3.196a1 1 0 0 1 0 1.696L6.53 16.044A1 1 0 0 1 5 15.196m8 0V8.804a1 1 0 0 1 1.53-.848l5.113 3.196a1 1 0 0 1 0 1.696l-5.113 3.196a1 1 0 0 1-1.53-.848"></svg:path>`,
})
export class HumbleiconsFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
