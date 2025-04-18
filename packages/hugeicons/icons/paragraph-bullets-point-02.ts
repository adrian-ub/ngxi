import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParagraphBulletsPoint02Icon],svg[hugeicons-paragraph-bullets-point-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 4h6m-6 11h6m-6-6h6m-6 11h6"></svg:path><svg:circle cx="6.5" cy="6.5" r="3.5"></svg:circle><svg:circle cx="6.5" cy="17.5" r="3.5"></svg:circle></svg:g>`,
})
export class HugeiconsParagraphBulletsPoint02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
