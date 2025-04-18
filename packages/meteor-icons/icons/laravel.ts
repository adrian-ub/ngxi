import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLaravelIcon],svg[meteor-icons-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 10.8l4.5 2.5M5.5 1L1 3.5V18l9 5l8.5-4.7v-10L23 5.8v5L10 18l-4.5-2.5V6L10 3.5ZM1 3.5L5.5 6m0 9.5l8.5-4.7v-5l4.5-2.5L23 5.8M10 3.5V13m4-7.2l4.5 2.5M10 18v5"></svg:path>`,
})
export class MeteorIconsLaravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
