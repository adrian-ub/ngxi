import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBorderTop02Icon],svg[hugeicons-border-top-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.753 17.666c.194 1.049.536 1.82 1.14 2.43c.605.61 1.37.955 2.409 1.15M2.507 10q-.006.883-.005 1.916q-.001 1.034.005 1.917m7.595 7.662q.875.006 1.9.005q1.025.001 1.9-.005m3.8-.249c1.04-.195 1.804-.54 2.409-1.15s.946-1.381 1.14-2.43M21.496 10q.006.884.005 1.916q.001 1.034-.005 1.917M2.5 6.5c.199-1.094.55-1.9 1.17-2.536C5.1 2.5 7.4 2.5 12 2.5s6.9 0 8.33 1.464c.62.637.972 1.442 1.17 2.536" color="currentColor"></svg:path>`,
})
export class HugeiconsBorderTop02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
