import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSushi02Icon],svg[hugeicons-sushi-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M10 9a5 5 0 1 0 10 0a5 5 0 0 0-10 0m1.5-7L7.537 16.412M6 22l.825-3M22 12.5L2 18"></svg:path></svg:g>`,
})
export class HugeiconsSushi02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
