import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibBuzzfeedIcon],svg[cib-buzzfeed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 16c0 8.839-7.161 16-16 16S0 24.839 0 16S7.161 0 16 0s16 7.161 16 16m-5.531-.364L25.166 6.38l-8.667 3.5l3.432 1.984l-3.244 5.62l-5.62-3.244l-5.537 9.588l3.1 1.792l3.749-6.489l5.62 3.244l5.036-8.724z"></svg:path>`,
})
export class CibBuzzfeedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
