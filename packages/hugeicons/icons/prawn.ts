import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrawnIcon],svg[hugeicons-prawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 5a8.5 8.5 0 1 0 8.5 8.5c0-.47-.384-.859-.845-.766A4.25 4.25 0 0 0 14.75 16.9M10.5 5h6.8c.939 0 1.722.773 1.49 1.683A6.8 6.8 0 0 1 12.2 11.8h-1.7a2.55 2.55 0 0 0 0 5.1h4.25M10.5 5v3.4m4.25 8.5v.85M5.4 20.3l3.4-3.4M3.275 9.25l4.675 3.825M13.5 8h-.009"></svg:path><svg:path d="M9 2h11.16c1.161 0 2.031 1.051 1.804 2.178c-.295 1.46-1.62 2.5-3.045 2.822"></svg:path></svg:g>`,
})
export class HugeiconsPrawnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
