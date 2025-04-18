import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSushi03Icon],svg[hugeicons-sushi-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 9.5C5 10.88 7.015 12 9.5 12S14 10.88 14 9.5S11.985 7 9.5 7S5 8.12 5 9.5"></svg:path><svg:path d="M14 16.647C14 17.947 11.985 19 9.5 19S5 17.947 5 16.647V9.5m9 0v4m-4.5-4h-.009M2 18l20-7M2 14l3-1.35M22 5l-8 3.6"></svg:path></svg:g>`,
})
export class HugeiconsSushi03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
