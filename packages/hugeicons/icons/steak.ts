import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSteakIcon],svg[hugeicons-steak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 16a5 5 0 0 0 4-8c-2.125-2.83-5-4-9-4S2 6.865 2 10.5A2.5 2.5 0 0 0 4.5 13H8c1.324-.033 4 .5 6.236 2.167A5 5 0 0 0 17 16"></svg:path><svg:path d="M2 10.5v.5c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17c1.324-.032 4 .5 6.236 2.167A5 5 0 0 0 22 15v-4"></svg:path><svg:path d="M18.5 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsSteakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
