import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRukuIcon],svg[hugeicons-ruku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15.5 7.762l2.388.227c1.399.132 2.612-.908 2.612-2.24c0-1.242-1.064-2.249-2.375-2.249H15.5"></svg:path><svg:path d="m12.091 6.5l-2.07 3.883v4.515m0 0V18.5c-3.236 0-5.174-.667-6.521-1V9.61c0-3.927 3.217-7.11 7.185-7.11c1.563 0 2.745.19 3.572.42c.931.257 1.475 1.096 1.664 2.034a4 4 0 0 1-.128 2.054zM8.5 18.5v3m0 0h-1c-.943 0-1.414 0-1.707-.293S5.5 20.443 5.5 19.5v-1m3 3H10"></svg:path></svg:g>`,
})
export class HugeiconsRukuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
