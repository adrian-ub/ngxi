import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTinderSquareIcon],svg[hugeicons-tinder-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M16.324 9.9c1.6 3.146.313 7.361-3.363 7.974C8.147 18.939 4.936 13 8.552 9.519c.193-.193.726-.692.948-.852c0 .491.286 2 .625 2c2.02 0 2.5-2.667 2.242-4.667c1.687.891 3.117 2.132 3.957 3.9"></svg:path></svg:g>`,
})
export class HugeiconsTinderSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
